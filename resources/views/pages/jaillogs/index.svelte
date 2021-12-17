<script context="module">
    import Layout from "../../layouts/default.svelte";
    export const layout = Layout;
</script>

<script>
    import { fade } from "svelte/transition";
    import { quintIn, quintOut } from "svelte/easing";

    import { parseHtml } from "./lib/parseHtml.js";

    let htmlInput = "";
    $: errorMessage = false;
    $: message = "";
    $: templateOutput = "";

    async function parseInput() {
        try {
            const temp = await parseHtml(htmlInput);
            templateOutput = temp;
        } catch (error) {
            errorMessage = true;
            message = "Something went wrong!";
        }
    }
</script>

<div
    class="content"
    in:fade={{ duration: 200, delay: 250, easing: quintIn }}
    out:fade={{ duration: 200, easing: quintOut }}
>
    <div class="control">
        <div class="input">
            <label for="doc-input">HTML Input</label>
            <textarea
                name="doc-input"
                id="doc-input"
                rows="10"
                class={errorMessage ? "error" : ""}
                bind:value={htmlInput}
            />
        </div>
        <div class="input-control">
            <button on:click={parseInput}>Make Template!</button>
        </div>
        <div class="output">
            <label for="doc-input">WordPress Template</label>
            <textarea
                name="doc-output"
                id="doc-output"
                rows="10"
                bind:value={templateOutput}
            />
        </div>
    </div>
    <div class="preview-content">
        <h2>Preview</h2>
        {#if errorMessage}
            <p class="error-message">{message}</p>
        {/if}
        <div class="preview">
            {@html templateOutput}
        </div>
    </div>
</div>

<style>
    .content {
        padding: var(--step-4);
        display: flex;
        flex-direction: column;
        gap: var(--step-4);
    }

    .control {
        display: flex;
        flex-direction: column;
        gap: var(--step-4);
    }
    textarea {
        background-color: var(--background-offset);
        width: 100%;
        resize: none;
        border: none;
        box-shadow: none;
        border-radius: 0.5rem;
        box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.4);
        padding: 1rem;
    }

    .error {
        background-color: var(--accent-secondary);
    }

    .input,
    .output {
        display: flex;
        flex-direction: column;
        gap: var(--step-0);
    }

    .input label,
    .output label,
    h2 {
        padding-inline: var(--step-0);
        font-size: var(--step-1);
        font-weight: 600;
    }

    .input-control {
        text-align: center;
    }

    .error-message {
        color: var(--accent-secondary);
        text-align: center;
        font-size: var(--step-0);
    }

    button {
        font-size: var(--step-0);
        background-color: var(--prussian-05);
        color: var(--light);
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 0.5em;
        font-weight: 600;
        letter-spacing: 0.125em;
        cursor: pointer;
        box-shadow: 5px 5px 15px rgba(var(--shadow), 0.8);
    }

    button:active {
        box-shadow: 3px 3px 10px rgba(var(--shadow), 0.9);
    }

    @media (min-width: 1024px) {
        .control {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-areas:
                "input output"
                "control control";
        }
        .input {
            grid-area: input;
        }
        .output {
            grid-area: output;
        }
        .input-control {
            grid-area: control;
        }
    }
</style>
