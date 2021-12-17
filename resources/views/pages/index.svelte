<script context="module">
    import Layout from "../layouts/default.svelte";
    export const layout = Layout;
</script>

<script>
    import { inertia } from "@inertiajs/inertia-svelte";
    import { fade } from "svelte/transition";
    import { quintIn, quintOut } from "svelte/easing";
    import Icon from "../lib/components/Icon.svelte";
</script>

<div
    class="content"
    in:fade={{ duration: 200, delay: 200, easing: quintIn }}
    out:fade={{ duration: 200, easing: quintOut }}
>
    <div class="two-up">
        <a class="card" use:inertia href="/prompter">
            <div class="card-head">
                <h3>Prompter</h3>
            </div>
            <div class="card-body">
                <Icon name="terminal" />
            </div>
        </a>
        <a class="card" use:inertia href="jaillogs">
            <div class="card-head">
                <h3>Jail Logs</h3>
            </div>
            <div class="card-body">
                <Icon name="lock" />
            </div>
        </a>
    </div>

    <p>Tools made to make life in the KLST/KSAN newsroom a little easier.</p>
</div>

<style>
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--step-4);
        margin: var(--step-4);
    }
    .content p {
        max-width: 40ch;
        font-size: var(--step-0);
        line-height: 1.5;
        text-align: center;
    }
    .two-up {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 50%;
        margin: 0 auto;
        justify-content: center;
        gap: var(--step-4);
    }

    .card {
        display: grid;
        grid-template-rows: 1fr auto;
        grid-template-areas:
            "body"
            "head";
        background: var(--mid);
        color: var(--light);
        padding: 0.5rem;
        aspect-ratio: 1/1;
        gap: 0.5rem;
        border: 2px solid transparent;
        box-shadow: 5px 5px 10px 10px rgba(var(--shadow), 0.5);
        transition: all 0.3s ease-out;
    }

    .card:hover {
        border-color: var(--prussian-04);
    }

    .card * {
        padding: 0.25rem;
    }
    .card-head {
        grid-area: head;
        display: flex;
        justify-content: center;
    }
    .card-head h3 {
        font-weight: 500;
        letter-spacing: 0.125em;
    }
    .card-body {
        grid-area: body;
        background: var(--prussian-06);
        font-size: var(--step-6);
        color: var(--prussian-09);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
