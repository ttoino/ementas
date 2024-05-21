import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import arraybuffer from "vite-plugin-arraybuffer";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
    plugins: [sveltekit(), arraybuffer(), topLevelAwait()],
    test: {
        include: ["src/**/*.{test,spec}.{js,ts}"],
    },
});
