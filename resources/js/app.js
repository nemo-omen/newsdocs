import { createInertiaApp } from "@inertiajs/inertia-svelte";

const pages = import.meta.glob("../views/pages/**/*.svelte");

createInertiaApp({
    resolve: (name) => import(`../views/pages/${name}.svelte`),
    setup({ el, App, props }) {
        new App({ target: el, props });
    },
});
