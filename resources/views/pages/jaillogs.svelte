<script context="module">
    import Layout from "../layouts/default.svelte";
    export const layout = Layout;
</script>

<script>
    import { fade } from "svelte/transition";
    import { quintIn, quintOut } from "svelte/easing";
</script>

<div
    class="content"
    in:fade={{ duration: 200, delay: 200, easing: quintIn }}
    out:fade={{ duration: 200, easing: quintOut }}
>
    <h2>Jail Logs</h2>
</div>
