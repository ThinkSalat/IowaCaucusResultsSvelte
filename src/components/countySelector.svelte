<script>
  export let counties;
  export let selectCounty;

</script>

<div>
  Select your county:
  <input list="county-list" on:change={e => selectCounty(e.target.value)}>
  <datalist id="county-list">
    {#each counties as county}
      <option value={county}>
    {/each}
  </datalist>  
</div>
