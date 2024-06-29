<script>
	import { setContext } from 'svelte'
	import { P45, Shape } from 'p45'

	import Header from './header/Header.svelte'
	import RefGrid from './grid/RefGrid.svelte'
	import Console from './Console.svelte'
	import generatePoints from './generate-points'

	//@prop size
	// Size of the P45 grid.
	// @default 24
	export let size = 24

	const p45 = new P45(Number(size))
	setContext('p45', p45)

	const points = generatePoints(p45)

	//@prop selected
	// The selected node.
	// @default Grid.centerNode
	let selected = points.find((p) => {
		return p.x === p45.center && p.y === p45.center
	})

	let pointsEnabled = true
	let guidelinesEnabled = true
	let targetEnabled = true
	let axisEnabled = true

	let shapes
</script>

<div class="p46">
	{#if $$slots.header}
		<div class="p46-header">
			<slot name="header" />
		</div>
	{/if}
	<Header
		{selected}
		bind:pointsEnabled
		bind:guidelinesEnabled
		bind:targetEnabled
		bind:axisEnabled />
	<RefGrid
		{p45}
		{points}
		bind:selected
		{pointsEnabled}
		{guidelinesEnabled}
		{targetEnabled}
		{axisEnabled}>
		{#if shapes}
			{#each Object.entries(shapes) as [id, draw] (id)}
				<Shape {draw} fill="transparent" />
			{/each}
		{/if}
	</RefGrid>
	<Console bind:shapes />
</div>

<style>
	.p46-header {
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
		gap: 1rem;
		width: 100%;
	}
</style>
