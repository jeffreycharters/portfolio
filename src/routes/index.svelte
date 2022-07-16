<script>
	import Projects from '$lib/components/Projects.svelte';
	import Production from '$lib/components/Production.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import AboutMe from '$lib/components/AboutMe.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />

<div class="max-w-lg mx-auto">
	<AboutMe />
	<Skills />

	<Projects />
	<Production />
</div>
