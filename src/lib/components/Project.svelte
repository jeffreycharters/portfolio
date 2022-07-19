<script lang="ts">
	import GithubIconLink from './GithubIconLink.svelte';

	export let title: string;
	export let name: string;

	export let tags: string[] = [];

	export let desktop: boolean = true;
	export let mobile: boolean = true;

	export let ghLink: string | null = null;
	const linkText = `https://github.com/${ghLink}`;

	const srcDevice = `images/${name}-phone.png`;
	const srcDesktop = `images/${name}-desktop.png`;
</script>

<div class="border border-slate-200 shadow-sm rounded-md px-2 mb-4 py-2 bg-slate-50">
	<div class="text-teal-700 font-semibold flex justify-between items-center gap-2">
		<div>
			{title}
		</div>

		{#if ghLink}
			<a href={linkText}>
				<GithubIconLink />
			</a>
		{/if}
	</div>
	<hr class="mt-1" />
	<div class="p-2 text-sm">
		{#if mobile}
			<img
				src={srcDevice}
				alt="Screen capture of the {name} website showing on a mobile device"
				class="device-image w-24 float-right ml-4"
			/>
		{/if}
		<slot />

		<div class="flex gap-2 mt-4 flex-wrap justify-start">
			{#each tags as tag}
				<div class="text-sm bg-teal-100 py-1 px-2 rounded-md text-teal-700">
					{tag}
				</div>
			{/each}
		</div>
	</div>

	{#if name}
		<div class="clear-both">
			{#if desktop}
				<img
					src={srcDesktop}
					alt="Screen capture of the {name} website showing on a desktop display"
					class="desktop-image border-2 rounded-sm border-slate-800 mt-4 shadow-lg"
				/>
			{/if}
		</div>
	{/if}
</div>
