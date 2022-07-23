<script>
	import Projects from '$lib/components/Projects.svelte';
	import Production from '$lib/components/Production.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import AboutMe from '$lib/components/AboutMe.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />

<div
	class="max-w-screen-sm mx-auto content lg:grid lg:grid-cols-7 lg:items-start lg:max-w-screen-xl lg:grid-rows-9"
>
	<AboutMe />
	<Skills />

	<Projects />
	<Production />
</div>
