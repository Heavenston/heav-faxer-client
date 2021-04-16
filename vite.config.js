import svelte from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [svelte()],

    root: "src",
    server: {
        port: 1234,
    },
});
