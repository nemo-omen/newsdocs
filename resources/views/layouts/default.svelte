<script>
    import { inertia, page } from "@inertiajs/inertia-svelte";
</script>

<header>
    <div id="site-brand">
        <h1>
            <a href="/" use:inertia class="home"> NewsDocs </a>
        </h1>
    </div>
    <nav>
        <a use:inertia href="/">Home</a>
        <a use:inertia href="/jaillogs">Jail Logs</a>
        <a use:inertia href="/prompter">Prompter</a>
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
        padding: 1rem;
        box-shadow: 5px 5px 10px 10px rgba(var(--shadow), 0.5);
    }

    nav {
        display: flex;
        gap: 2rem;
    }

    nav a {
        letter-spacing: 0.125em;
    }

    main {
        position: relative;
        height: 100%;
    }

    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        background: var(--background-offset);
        box-shadow: 5px 5px 10px 10px rgba(var(--shadow), 0.5);
    }
    .active {
        color: var(--accent);
    }
</style>
