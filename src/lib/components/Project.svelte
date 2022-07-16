<script>
	export let title = '';
</script>

<div class="border border-slate-200 shadow-sm rounded-md px-2 mb-4 py-2 bg-slate-50">
	<div class="text-teal-700 font-semibold">
		{title}
	</div>
	<hr class="mt-1" />
	<div class="p-2 text-sm">
		<slot />
	</div>
</div>
