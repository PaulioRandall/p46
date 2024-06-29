<script>
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'
	import { P45, Shape } from 'p45'

	import RefGrid from './grid/RefGrid.svelte'
	import Console from './Console.svelte'
	import generatePoints from './generate-points'

	//@prop size
	// Size of the P45 grid.
	// @default 24
	export let size = 24

	const p45 = new P45(Number(size))
	const points = generatePoints(p45)

	let shapes

	setContext('p45', p45)
	setContext('p46-points', points)

	setContext(
		'p46-selected-store',
		writable(
			points.find((p) => {
				//
				return p.x === p45.center && p.y === p45.center
			})
		)
	)

	setContext('p46-axis-enabled-store', writable(true))
	setContext('p46-guidelines-enabled-store', writable(true))
	setContext('p46-points-enabled-store', writable(true))
	setContext('p46-target-enabled-store', writable(true))
</script>

<div class="p46">
	{#if $$slots.header}
		<div class="p46-header">
			<slot name="header" />
		</div>
	{/if}
	<RefGrid>
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
