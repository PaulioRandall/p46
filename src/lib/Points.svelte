<script>
	import { getContext } from 'svelte'

	const points = getContext('p46-points')
	const pointsEnabledStore = getContext('p46-points-enabled-store')
</script>

{#if $pointsEnabledStore}
	{#each points as p (p.node)}
		<circle class="p46-ref-grid-point" r="0.1" cx={p.x} cy={p.y} />
	{/each}
{/if}

<style>
	.p46-ref-grid-point {
		fill: grey;
		pointer-events: none;
	}
</style>
