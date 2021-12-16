// import { defineConfig } from "laravel-vite";
// import vue from "@vitejs/plugin-vue";

// export default defineConfig()
// 	.withPlugin(vue);

// View your website at your own local server
// for example http://vite-php-setup.test

// http://localhost:3000 is serving Vite on development
// but accessing it directly will be empty

// IMPORTANT image urls in CSS works fine
// BUT you need to create a symlink on dev server to map this folder during dev:
// ln -s {path_to_vite}/src/assets {path_to_public_html}/assets
// on production everything will work just fine

// vue plugin
// import vue from "@vitejs/plugin-vue";
import { svelte } from "@sveltejs/vite-plugin-svelte";
// needed for .env
import { defineConfig, loadEnv } from "vite";
// live reload php
import liveReload from "vite-plugin-live-reload";
// resolver
const { resolve } = require("path");

const ASSET_URL = process.env.ASSET_URL || "";

// https://vitejs.dev/config
export default defineConfig(({ mode }) => {
    require("dotenv").config({ path: `./.env.${mode}` });

    return {
        plugins: [
            // vue(),
            svelte({}),
            liveReload(__dirname + "/**/*.php"),
            // edit according to your source code
        ],
        // config
        root: "resources",
        base: `${process.env.ASSET_URL}/dist/`,
        build: {
            // output dir for production build
            outDir: resolve(__dirname, "public/dist"),
            emptyOutDir: true,
            // emit manifest so PHP can find the hashed files
            manifest: true,

            // esbuild target
            target: "es2018",

            // our entry
            rollupOptions: {
                input: ["/js/app.js"],
            },
        },

        server: {
            // required to load scripts from custom host
            cors: true,
            // we need a strict port to match on PHP side
            // change freely, but update on PHP to match the same port
            strictPort: true,
            port: 3000,
        },

        // required for in-browser template compilation
        // https://v3.vuejs.org/guide/installation.html#with-a-bundler
        resolve: {
            alias: {
                vue: "vue/dist/vue.esm-bundler.js",
            },
        },
        optimizeDeps: {
            include: [
                "vue",

                "@inertiajs/inertia",

                "@inertiajs/inertia-vue3",

                "@inertiajs/progress",

                "axios",
            ],
        },
    };
});
