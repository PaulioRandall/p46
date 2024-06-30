<script>
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'
	import { P45, Shape } from 'p45'

	import Grid from './grid/Grid.svelte'
	import HitBoxes from './grid/HitBoxes.svelte'
	import UserShape from './grid/UserShape.js'
	import generatePoints from './grid/generate-points'

	import Console from './Console.svelte'
	import ConsoleShapeDrawer from './console/ConsoleShapeDrawer.svelte'

	//@prop size
	// Size of the P45 grid.
	// @default 24
	export let size = 24

	const p45 = new P45(Number(size))
	const points = generatePoints(p45)

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

	const userShapes = [
		new UserShape(), //
	]

	userShapes[0].draw = [
		'move to U2',
		'quad curve to M22 control with V16',
		'quad curve to E2 control with D16',
		'quad curve to U2 control with M8',
		'close',
	].join('\n')

	setContext('p46-axis-enabled-store', writable(true))
	setContext('p46-guidelines-enabled-store', writable(true))
	setContext('p46-points-enabled-store', writable(true))
	setContext('p46-target-enabled-store', writable(true))
	setContext('p46-rounded-enabled-store', writable(false))
	setContext('p46-stroke-width-slider-store', writable(1))

	setContext('p46-user-shapes-store', writable(userShapes))
	setContext('p46-selected-user-shape-store', writable(userShapes[0]))
</script>

<div class="p46">
	{#if $$slots['before-grid']}
		<div class="p46-before-grid">
			<slot name="before-grid" />
		</div>
	{/if}

	<Grid>
		<slot name="before-shape" />
		<ConsoleShapeDrawer />
		<slot name="after-shape" />
		<HitBoxes />
		<slot name="after-hitbox" />
	</Grid>

	{#if $$slots['after-grid']}
		<div class="p46-after-grid">
			<slot name="after-grid" />
		</div>
	{/if}
</div>

<style>
	.p46 {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.p46-before-grid {
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
		gap: 1rem;
		width: 100%;
	}
</style>
