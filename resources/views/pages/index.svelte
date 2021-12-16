<script context="module">
    import Layout from "../layouts/default.svelte";
    export const layout = Layout;
</script>

<script>
    let name = "whatever";
    import HelloWorld from "../lib/components/HelloWorld.svelte";
</script>

<h1>Hello, {name}</h1>

<HelloWorld eh={"meh"} />
