<script>
	import { getContext } from 'svelte'

	const points = getContext('p46-points')
</script>

{#each points as p (p.node)}
	<circle class="p46-ref-grid-point" r="0.1" cx={p.center.x} cy={p.center.y} />
{/each}

<style>
	.p46-ref-grid-point {
		pointer-events: none;
	}
</style>
