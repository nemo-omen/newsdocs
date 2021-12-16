<script context="module">
    import Layout from "../layouts/default.svelte";
    export const layout = Layout;
</script>

<script>
    let name = "whatever";
    import HelloWorld from "../lib/components/HelloWorld.svelte";
</script>

<div class="content">
    <p>
        A little set of tools made to make life in the KLST/KSAN newsroom a
        little easier.
    </p>

    <div class="two-up">
        <article class="card">
            <div class="card-head">
                <h3>Prompter</h3>
            </div>
            <div class="card-body">: )</div>
        </article>
        <article class="card">
            <div class="card-head">
                <h3>Jail Logs</h3>
            </div>
            <div class="card-body">: )</div>
        </article>
    </div>
</div>

<style>
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--step-4);
        margin: var(--step-4);
    }
    .content p {
        max-width: 50ch;
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
        gap: var(--step-3);
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
    }

    .card * {
        padding: 0.25rem;
    }
    .card-head {
        grid-area: head;
    }
    .card-body {
        grid-area: body;
        background: var(--prussian-06);
    }
</style>
