<script>
  export let data;
</script>

<style>
  .precinct-name {
    font-size: 18px;
    font-weight: 500;
    margin-top: 20px;
  }

  .precinct-data {
    margin-left: 12px;
    margin-bottom: 20px;
  }

  .caucus-results-container {
    width: 750px;
    margin-left: 20px;
    padding-left: 20px;
    height: 563px;
    overflow: scroll;
    border: 1px  #CCC solid;

    box-shadow: 
      inset 0px 11px 8px -10px #CCC,
      inset 0px -11px 8px -10px #CCC; 
  }
</style>

<div class='caucus-results-container'>
  {#each Object.keys(data) as precinctName}
    <div class='precinct-name'>Precinct: {precinctName}</div>
    <br />
    <div class='precinct-data'>
      {#each Object.keys(data[precinctName]) as measure}
        <div>{measure}: {data[precinctName][measure]}</div>
      {/each}
    </div>
  {/each}
</div>