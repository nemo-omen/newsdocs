<script>
    import { inertia, page, Link } from "@inertiajs/inertia-svelte";
    import { Inertia } from "@inertiajs/inertia";

    $: current = "/";

    Inertia.on("navigate", (event) => {
        const pg = event.detail?.page;
        // console.log(pg);
        if (pg.url) {
            current = pg.url;
        } else {
            current = "/";
        }
        console.log("current page: ", current);
    });
</script>

<header>
    <div id="site-brand">
        <h1>
            <Link href="/" class="home">NewsDocs</Link>
        </h1>
    </div>
    <nav>
        <Link href="/" class={current === "/" ? "active" : ""}>Home</Link>
        <Link href="/jaillogs" class={current === "/jaillogs" ? "active" : ""}
            >Jail Logs</Link
        >
        <Link href="/prompter" class={current === "/prompter" ? "active" : ""}
            >Prompter</Link
        >
    </nav>
</header>
<main>
    <slot />
</main>

<footer>
    <p>&copy {new Date().getFullYear()}, NewsDocs</p>
</footer>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        background: var(--background-offset);
        padding: var(--step--1) var(--step-1);
        box-shadow: 5px 5px 10px 10px rgba(var(--shadow), 0.5);
    }

    nav {
        display: flex;
        gap: 2rem;
    }

    :global(nav a) {
        letter-spacing: 0.125em;
    }

    main {
        position: relative;
        height: 100%;
        overflow-y: scroll;
    }

    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        background: var(--background-offset);
        box-shadow: 5px 5px 10px 10px rgba(var(--shadow), 0.5);
    }
    :global(.active) {
        color: var(--accent);
    }
    :global(.active):hover {
        color: var(--accent-secondary);
    }
</style>
