FROM alpine:latest AS tesstrain

WORKDIR /app

RUN apk update && \
    apk add --no-cache \
    git make tesseract-ocr python3 py3-pillow

RUN git clone https://github.com/tesseract-ocr/tesstrain.git .

RUN mkdir -p /usr/share/tessdata
RUN wget -P /usr/share/tessdata https://github.com/tesseract-ocr/tessdata_best/raw/main/eng.traineddata
RUN wget -P /usr/share/tessdata https://github.com/tesseract-ocr/tessdata_best/raw/main/por.traineddata

COPY ./tesstrain/eng ./data/eng_ementas-ground-truth
COPY ./tesstrain/por ./data/por_ementas-ground-truth

RUN make tesseract-langdata TESSDATA=/usr/share/tessdata SHELL=/bin/sh
RUN make training TESSDATA=/usr/share/tessdata SHELL=/bin/sh MODEL_NAME=eng_ementas START_MODEL=eng
RUN make training TESSDATA=/usr/share/tessdata SHELL=/bin/sh MODEL_NAME=por_ementas START_MODEL=por

FROM node:current-alpine AS dev

WORKDIR /app

RUN apk update && \
    apk add --no-cache make gcc g++ python3 pkgconfig \
    pixman-dev cairo-dev pango-dev libjpeg-turbo-dev \
    curl

VOLUME [ "/app" ]

CMD npm i && npm run dev -- --host

FROM node:current-alpine AS build

WORKDIR /app

RUN apk update && \
    apk add --no-cache make gcc g++ python3 pkgconfig \
    pixman-dev cairo-dev pango-dev libjpeg-turbo-dev

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY .env .
COPY postcss.config.js .
COPY svelte.config.js .
COPY tailwind.config.js .
COPY tsconfig.json .
COPY vite.config.ts .
COPY prisma prisma
COPY static static
COPY src src

RUN npm run build

FROM node:current-alpine AS prod

WORKDIR /app

RUN apk update && \
    apk add --no-cache curl \
    cairo pango libjpeg-turbo

COPY crontab.txt /etc/crontabs/root

COPY package.json package-lock.json ./
COPY prisma prisma

RUN npm ci --production
RUN npm run prisma:gen

COPY --from=build /app/build .
COPY --from=tesstrain /app/data/*.traineddata .

ENTRYPOINT [ "/bin/sh", "-c", "crond && node ." ]
