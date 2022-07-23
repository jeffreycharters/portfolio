<script lang="ts">
	import Project from '$lib/components/Project.svelte';
	import { rotator } from '$lib/assets/utils';
	import { onMount } from 'svelte';

	const max = 2;
	let rotate: string;
	onMount(() => {
		rotate = rotator(max);
	});
</script>

<div
	class="border border-gray-400 my-2 w-11/12 mx-auto md:ml-0 mb-4 p-2 rounded-md max-w-lg lg:col-span-4 lg:col-start-1 lg:row-start-4 lg:row-span-2 lg:max-w-none"
	style={rotate}
>
	<div class="flex items-center font-semibold px-4">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-device-laptop text-orange-500 mr-2"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<desc>Download more icon variants from https://tabler-icons.io/i/device-laptop</desc>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<line x1="3" y1="19" x2="21" y2="19" />
			<rect x="5" y="6" width="14" height="10" rx="1" />
		</svg>
		<span class="text-slate-800 text-xl">Projects</span>
	</div>
	<hr class="border text-slate-500 mt-1 mb-2" />

	<div>
		<Project
			title="Blurt"
			name="blurt"
			tags={['javascript', 'sveltekit', 'prisma.io', 'tailwind']}
			ghLink="jeffreycharters/blurt"
		>
			<p class="mb-2">
				A satirical micro-tweeting platform with zero security. A Blurt is like a Tweet limited to
				14 characters. Every user is "verified" but no accounts are password protected.
			</p>
			<p class="mb-2">Written using Javascript, Sveltekit, Prisma ORM and TailwindCSS.</p>
		</Project>

		<Project
			title="Volunteer Hour Tracking"
			name="gorba"
			desktop={false}
			tags={['javascript', 'sveltekit', 'prisma.io', 'tailwind']}
			ghLink="jeffreycharters/gorba-hours"
		>
			<p class="mb-2">
				A mobile-only app to track volunteer hours for the local mountain bike club. Uses a simple,
				touch-friendly GUI for efficient user experience.
			</p>
			<p class="mb-2">Written using JavaScript, Sveltekit, Prisma ORM and TailwindCSS.</p>
		</Project>
	</div>
</div>
