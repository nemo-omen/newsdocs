<script context="module">
    import Layout from "../../layouts/default.svelte";
    export const layout = Layout;
</script>

<script>
    import { fade } from "svelte/transition";
    import { quintIn, quintOut } from "svelte/easing";
</script>

<div
    class="content"
    in:fade={{ duration: 200, delay: 250, easing: quintIn }}
    out:fade={{ duration: 200, easing: quintOut }}
>
    <h2>Prompter</h2>
</div>
