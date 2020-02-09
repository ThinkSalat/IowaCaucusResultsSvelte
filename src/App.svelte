<script>
  import CandidateSidebar from './components/candidateSidebar.svelte';
  import CaucusResults from './components/caucusResults.svelte';
  import CountySelector from './components/countySelector.svelte';

  export let results;
  const candidates = Object.keys(results)
  const counties = Object.keys(results[candidates[0]])

  let selectedCandidate, selectedCounty;

  const selectCandidate = name => selectedCandidate = name 
  const selectCounty = name => selectedCounty = name

  const reset = () => {
    selectedCandidate = ''
    selectedCounty = ''
  }

  $: data = selectedCandidate && selectedCounty ? results[selectedCandidate][selectedCounty] : {}

</script>

<main>
  <h1>Iowa Caucus Results</h1>
  <h2>Candidate: {selectedCandidate || 'none'}</h2>
  <h2>County: {selectedCounty || 'none'}</h2>
  <button on:click={reset}>Reset</button>

  <CountySelector {...{ counties, selectCounty }}/>

  <div class='main-content-container'>
    <CandidateSidebar {...{ candidates, selectCandidate }} />
    <CaucusResults data={data} />
  </div>


</main>

<style>
  .main-content-container {
    display: grid;
    grid-template-columns: 200px 500px;
  }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>