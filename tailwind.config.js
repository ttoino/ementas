/// @ts-check
// import forms from "@tailwindcss/forms";
import { getIconCollections, iconsPlugin } from "@egoist/tailwindcss-icons";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config & {daisyui?: import("daisyui").Config}}*/
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {},
    },

    plugins: [
        /*forms,*/ typography,
        daisyui,
        iconsPlugin({ collections: getIconCollections(["tabler"]) }),
    ],
};
