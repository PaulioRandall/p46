<script>
	import { getContext } from 'svelte'

	const p45 = getContext('p45')
	const points = getContext('p46-points')
	const axisEnabledStore = getContext('p46-axis-enabled-store')
</script>

{#if $axisEnabledStore}
	{#each points as p (p.node)}
		{#if p.x === 0}
			<text
				x={p.x - 0.3}
				y={p.y - 0.1}
				text-anchor="end"
				dominant-baseline="middle"
				class="p46-ref-grid-axis">
				{p.y}
			</text>
		{/if}
		{#if p.y === 0}
			<text
				x={p.x}
				y={p.y - 0.5}
				text-anchor="middle"
				dominant-baseline="middle"
				class="p46-ref-grid-axis">
				{p45.numberToAlpha(p.x)}
			</text>
		{/if}
	{/each}
{/if}

<style>
	.p46-ref-grid-axis {
		font-size: 0.6px;
		fill: grey;

		user-select: none;
		pointer-events: none;
	}
</style>
