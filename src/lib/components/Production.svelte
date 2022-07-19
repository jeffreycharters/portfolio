<script lang="ts">
	import Project from '$lib/components/Project.svelte';

	import { rotator } from '$lib/assets/utils';
	const max = 3;
	const rotate: string = rotator(max);
</script>

<div
	class="border border-gray-400 my-2 w-11/12 mx-auto md:ml-auto md:mr-0 mb-4 p-2 rounded-md max-w-lg"
	style={rotate}
>
	<div class="flex items-center font-semibold px-4">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-rocket text-sky-500 mr-2"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<desc>Download more icon variants from https://tabler-icons.io/i/rocket</desc>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path
				d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"
			/>
			<path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
			<circle cx="15" cy="9" r="1" />
		</svg>
		<span class="text-slate-800 text-xl">Production Apps</span>
	</div>
	<hr class="border text-slate-500 mt-1 mb-2" />

	<div>
		<Project
			title="Oligo Synthesis and Sequencing"
			name="oliseq"
			mobile={false}
			tags={['python', 'django', 'htmx', 'redis', 'celery', 'agile']}
		>
			<p class="mb-2">Rewrote a legacy application from ColdFusion to Python/Django.</p>
			<p class="mb-2">
				App is used daily by scientists to order DNA products, request sequencing and to download
				sequenced DNA results.
			</p>
			<p class="mb-2">Written using Python, Django and htmx for asynchronous requests.</p>
		</Project>
	</div>
</div>
