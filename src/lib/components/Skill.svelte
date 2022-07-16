<script lang="ts">
	export let text: string;
	export let icon: string;

	const src = `./images/${icon}.svg`;
</script>

<div class="ml-2 flex gap-2 font-semibold text-emerald-500">
	<img {src} alt="{text} icon" />
	{text}
</div>
