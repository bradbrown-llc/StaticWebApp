<script>
    import SubreqComponent from './Subreq.svelte'
    import SubreqClass from '../classes/Subreq.js'
    let subreqs = [new SubreqClass()]
    function addSubreq() { subreqs = [...subreqs, new SubreqClass()] }
    function trade() { console.log(subreqs) }
</script>

<div class='trade-container'>
    {#each subreqs as subreq (subreq)}
        <SubreqComponent bind:subreqs bind:subreq/>
    {/each}
    <div>
        <button on:click={addSubreq}>+</button>
    </div>
    <div>
        <button on:click={trade}>Trade</button>
    </div>
</div>

<style>
    .trade-container {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
</style>