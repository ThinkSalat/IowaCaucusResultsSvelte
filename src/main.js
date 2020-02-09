import App from './App.svelte';
import results from '../iowaCaucusResults.json';


const app = new App({
	target: document.body,
	props: {
    results
	}
});

export default app;