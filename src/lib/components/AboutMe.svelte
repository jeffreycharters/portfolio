<script lang="ts">
	import Certificate from './Certificate.svelte';
	import CanadaFlag from './CanadaFlag.svelte';

	import { rotator } from '$lib/assets/utils';
	const max = 6;
	const rotate: string = rotator(max);
</script>

<div
	class="border border-gray-400 my-2 w-11/12 mx-auto mb-4 p-2 rounded-md max-w-lg bg-white"
	style={rotate}
>
	<div class="flex items-center font-semibold px-4">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-mood-confuzed mr-2 text-slate-700"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<desc>Download more icon variants from https://tabler-icons.io/i/mood-confuzed</desc>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<circle cx="12" cy="12" r="9" />
			<line x1="9" y1="10" x2="9.01" y2="10" />
			<line x1="15" y1="10" x2="15.01" y2="10" />
			<path d="M9.5 16a10 10 0 0 1 6 -1.5" />
		</svg>
		<span class="text-slate-800 text-xl">About Me</span>
	</div>
	<hr class="border text-slate-500 mt-1 mb-2" />

	<div>
		<div class="flex items-center mb-4 justify-end">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-map-pin text-red-700 mr-2"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				stroke-width="1.25"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<desc>Download more icon variants from https://tabler-icons.io/i/map-pin</desc>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<circle cx="12" cy="11" r="3" />
				<path
					d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
				/>
			</svg>
			<span class="text-gray-600 font-semibold">Guelph, Ontario</span>
			<CanadaFlag />
		</div>
		<p class="text-sm font-normal mb-4 xl:text-lg">
			Self-taught dev with 3+ years of practical experience. Looking for Canada-based remote work.
		</p>
	</div>

	<Certificate name="FullStackOpen.com (React/Redux)" />
	<Certificate name="MSc Oceanography" />
	<Certificate name="BSc Environmental Chemistry" />
</div>
