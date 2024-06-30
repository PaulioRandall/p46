<script>
	import { getContext } from 'svelte'
	import Guideline from './grid/Guideline.svelte'

	const p45 = getContext('p45')
	const points = getContext('p46-points')
	const guidelinesEnabledStore = getContext('p46-guidelines-enabled-store')
</script>

{#if $guidelinesEnabledStore}
	<rect
		x={points[0].x}
		y={points[0].y}
		width={p45.size}
		height={p45.size}
		fill="transparent"
		stroke="MediumSlateBlue"
		stroke-width="0.1"
		stroke-dasharray="0 0.25 0.25"
		class="p46-border" />

	{#if [8, 16, 24, 32, 48, 64].includes(p45.size)}
		<Guideline x="4" />
		<Guideline y="4" />
	{:else}
		<Guideline x={p45.center} />
		<Guideline y={p45.center} />
	{/if}

	{#if [16, 24, 32, 48, 64].includes(p45.size)}
		<Guideline x="8" />
		<Guideline y="8" />

		<Guideline x="12" />
		<Guideline y="12" />
	{/if}

	{#if [24, 32, 48, 64].includes(p45.size)}
		<Guideline x="16" />
		<Guideline y="16" />

		<Guideline x="20" />
		<Guideline y="20" />
	{/if}

	{#if [32, 48, 64].includes(p45.size)}
		<Guideline x="24" />
		<Guideline y="24" />

		<Guideline x="28" />
		<Guideline y="28" />
	{/if}

	{#if [48, 64].includes(p45.size)}
		<Guideline x="32" />
		<Guideline y="32" />

		<Guideline x="36" />
		<Guideline y="36" />

		<Guideline x="40" />
		<Guideline y="40" />

		<Guideline x="44" />
		<Guideline y="44" />
	{/if}

	{#if [64].includes(p45.size)}
		<Guideline x="48" />
		<Guideline y="48" />

		<Guideline x="52" />
		<Guideline y="52" />

		<Guideline x="56" />
		<Guideline y="56" />

		<Guideline x="60" />
		<Guideline y="60" />
	{/if}
{/if}
