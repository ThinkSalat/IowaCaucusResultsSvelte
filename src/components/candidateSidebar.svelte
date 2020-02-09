<script>
  import CandidateCard from './candidateCard.svelte';

  export let candidates;
  export let selectCandidate;

</script>

<style>
  .sidebar-container {
    display: flex;
    flex-direction: column;
  }
</style>

<div class='sidebar-container'>
  {#each candidates as candidate}
    <CandidateCard {...{ candidate, selectCandidate }} />
  {/each}
</div>