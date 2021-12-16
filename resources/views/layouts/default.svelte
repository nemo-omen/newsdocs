<script>
    import { inertia } from "@inertiajs/inertia-svelte";
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
    }

    nav {
        display: flex;
        gap: 2rem;
    }
</style>
