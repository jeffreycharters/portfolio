<script lang="ts">
	export let title: string;
	export let name: string;

	export let desktop: boolean = true;
	export let mobile: boolean = true;

	const srcDevice = `images/${name}-phone.png`;
	const srcDesktop = `images/${name}-desktop.png`;
</script>

<div class="border border-slate-200 shadow-sm rounded-md px-2 mb-4 py-2 bg-slate-50">
	<div class="text-teal-700 font-semibold">
		{title}
	</div>
	<hr class="mt-1" />
	<div class="p-2 text-sm">
		<slot />
	</div>

	{#if name}
		<div class="flex justify-evenly items-center">
			{#if desktop}
				<img
					src={srcDesktop}
					alt="Screen capture of the {name} website showing on a desktop display"
					class="h-36 border-4 border-gray-800 rounded-sm"
				/>
			{/if}

			{#if mobile}
				<img
					src={srcDevice}
					alt="Screen capture of the {name} website showing on a mobile device"
					class="w-24"
				/>
			{/if}
		</div>
	{/if}
</div>
