<script lang="ts">
	import Skill from './Skill.svelte';

	import { rotator } from '$lib/assets/utils';
	const max = 4;
	const rotate: string = rotator(max);
</script>

<div
	class="border border-gray-400 my-2 w-11/12 mx-auto mb-4 p-2 rounded-md max-w-lg bg-white"
	style={rotate}
>
	<div class="flex items-center font-semibold px-4">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-code-plus mr-2 text-red-700"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M9 12h6" />
			<path d="M12 9v6" />
			<path d="M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2" />
			<path d="M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2" />
		</svg>
		<span class="text-slate-800 text-xl">Skills</span>
	</div>
	<hr class="border text-slate-500 mt-1 mb-2" />

	<div>
		<Skill text="HTML 5" icon="html5" />
		<Skill text="Svelte" icon="svelte" />
	</div>
</div>
