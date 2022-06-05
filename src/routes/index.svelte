<script>
	import CanadaFlag from './index/CanadaFlag.svelte';
	import Certificate from './index/Certificate.svelte';
	import Project from './index/Project.svelte';
</script>

<div class="bg-slate-700 shadow-sm">
	<div class="max-w-lg p-2 flex items-baseline justify-between mx-auto">
		<div class="text-white text-xl tracking-wide font-bold">Jeffrey Charters</div>
		<div class="text-lime-300 text-sm text-right">Full Stack Web Developer</div>
	</div>
</div>

<div class="max-w-lg mx-auto">
	<div class="border border-gray-400 my-2 w-11/12 mx-auto p-2 rounded-md max-w-lg">
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
			<p class="text-sm font-normal mb-4">
				Self-taught dev with 3+ years of practical experience. Looking for Canada-based remote work.
			</p>
		</div>

		<Certificate name="FullStackOpen.com (React/Redux)" />
		<Certificate name="MSc Oceanography" />
		<Certificate name="BSc Environmental Chemistry" />
	</div>

	<div class="border border-gray-400 my-2 w-11/12 mx-auto p-2 rounded-md ">
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
			<Project title="Blurt">
				<p class="mb-2">
					A micro-tweeting platform with zero security. A Blurt is like a Tweet limited to 14
					characters. Every user is "verified" but no accounts are password protected.
				</p>
				<p class="mb-2">Written using Javascript, Sveltekit, Prisma ORM and TailwindCSS.</p>
			</Project>

			<Project title="Volunteer Hour Tracking">
				<p class="mb-2">
					A basic app to track volunteer hours for the local mountain bike club. Uses a simple GUI
					for efficient user experience.
				</p>
				<p class="mb-2">Written using JavaScript, Sveltekit, Prisma ORM and TailwindCSS.</p>
			</Project>
		</div>
	</div>

	<div class="border border-gray-400 my-2 w-11/12 mx-auto p-2 rounded-md ">
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
			<Project title="Oligo Synthesis and Sequencing">
				<p class="mb-2">Rewrote a legacy application from ColdFusion to Python/Django.</p>
				<p class="mb-2">
					App is used daily by dozens or scientists to order DNA products, request sequencing and to
					download sequenced DNA results.
				</p>
				<p class="mb-2">Written using Python, Django and htmx for asynchronous requests.</p>
			</Project>
		</div>
	</div>
</div>
