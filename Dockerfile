FROM node:current-alpine AS build

WORKDIR /app

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

RUN npm run prisma:gen
RUN npm run build

FROM node:current-alpine AS prod

WORKDIR /app

COPY package.json package-lock.json ./
COPY prisma prisma

RUN npm ci --production
RUN npm run prisma:gen

COPY --from=build /app/build .

ENTRYPOINT [ "node", "." ]
