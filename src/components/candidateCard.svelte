<script>
  export let candidate
  export let selectCandidate

  const handleSelect = () => selectCandidate(candidate)
  // going to receive the candidate name
  // will have a function that when clicked, if not the selected candidate, will switch the selectedCandidate to this one
</script>

<style>

</style>

<button on:click={handleSelect}>
  {candidate}
</button>