<script>
  export let data;
</script>

<style>
  .precinct-name {
    font-size: 18px;
    font-weight: 500;
  }

  .caucus-results-container {
    margin-left: 40px;
  }
</style>

<div class='caucus-results-container'>
  {#each Object.keys(data) as precinctName}
    <div class='precinct-name'>Precinct: {precinctName}</div>
    <br />
    {#each Object.keys(data[precinctName]) as measure}
      <div>{measure}: {data[precinctName][measure]}</div>
    {/each}
    <br />
  {/each}
</div>