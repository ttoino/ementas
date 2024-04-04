import { parsePdf } from "$lib/parser";
import { getDocument } from "pdfjs-dist";
import { describe, expect, it } from "vitest";

const merge = function* <A, B>(a: Record<string, A>, b: Record<string, B>) {
    for (const keyA in a) {
        for (const keyB in b) {
            const baseA = keyA.split("/").at(-2);
            const baseB = keyB.split("/").at(-2);

            if (baseA && baseA === baseB)
                yield [baseA, a[keyA], b[keyB]] as const;
        }
    }
};

describe.concurrent("parser", { timeout: 100000 }, async () => {
    const pdfs = import.meta.glob("./parser/*/menu.pdf", {
        query: "?uint8array",
        import: "default",
    }) as Record<string, () => Promise<string>>;
    const expected = import.meta.glob("./parser/*/expected.ts", {
        import: "default",
    });
    const merged = merge(pdfs, expected);

    it.each([...merged])(`parses %s`, async (_, pdf, exp) => {
        const pdfObject = await getDocument(await pdf()).promise;

        const items = await parsePdf(pdfObject, {
            name: "Test",
            lang: "en",
            files: [],
        });

        expect(items).toEqual(await exp());
    });
});
