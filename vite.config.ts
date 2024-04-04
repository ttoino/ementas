import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import arraybuffer from "vite-plugin-arraybuffer";

export default defineConfig({
    plugins: [sveltekit(), arraybuffer()],
    test: {
        include: ["src/**/*.{test,spec}.{js,ts}"],
    },
});
