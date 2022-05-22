import { svelte } from "@sveltejs/vite-plugin-svelte";
import { sveltePreprocess } from "svelte-preprocess/dist/autoProcess";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        svelte({
            preprocess: sveltePreprocess()
        })
    ],
    build: {
        outDir: "build",
        assetsDir: "public"
    },
    resolve: {
        alias: []
    }
});