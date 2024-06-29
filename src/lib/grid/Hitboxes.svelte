<script>
	import { getContext } from 'svelte'

	const points = getContext('p46-points')
	const selectedStore = getContext('p46-selected-store')
</script>

{#each points as p (p.node)}
	<rect
		x={p.topLeft.x}
		y={p.topLeft.y}
		width="1"
		height="1"
		fill="transparent"
		stroke="transparent"
		stroke-width="0.1"
		class="p46-ref-grid-hitbox"
		on:click={() => selectedStore.set(p)} />
{/each}

<style>
	.p46-ref-grid-hitbox {
		cursor: pointer;
	}
</style>
