<script>
    export let subreqs, subreq
    function delSubreq() {
        subreqs.splice(subreqs.indexOf(subreq), 1)
        subreqs = subreqs
    }
    let keys = ['gas', 'work', 'dest', 'input', 'output']
</script>

<div class='subreq-container'>
    {#each keys as key}
        {key} <input bind:value={subreq[key]}>
    {/each}
    <div class='delsubreq-button'>
        <button on:click={delSubreq}>-</button>
    </div>
</div>

<style>
    .subreq-container {
        border: 1px solid black;
        border-radius: 5px;
        padding: 5px 7px;
        width: 100px;
        display: flex;
        flex-direction: column;
        gap: 1px;
    }
    .delsubreq-button {
        margin-top: 5px;
    }
</style>
