<script>
	import { getContext } from 'svelte'

	const p45 = getContext('p45')

	export let x = null
	export let y = null

	const xStart = x ? Number(x) : 0
	const yStart = y ? Number(y) : 0

	const xEnd = x ? xStart : p45.size
	const yEnd = y ? yStart : p45.size
</script>

<line x1={xStart} y1={yStart} x2={xEnd} y2={yEnd} class="p46-guideline" />

<style>
	.p46-guideline {
		stroke: DarkGrey;
		stroke-width: 0.05;
		stroke-dasharray: 0 0.25 0.25;
	}

	@media (prefers-color-scheme: dark) {
		.p46-guideline {
			stroke: RebeccaPurple;
		}
	}
</style>
