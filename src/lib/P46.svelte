<script>
	/*@component
		`<P46>` is the framework component in which all other P46
		components are slotted into.
	*/

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
	// Size of the underlying P45 grid.
	// @default 24
	export let size = 24

	const p45 = new P45(Number(size))
	const points = generatePoints(p45)

	//@ctx p45
	// The P45 instance used to define grid dimensions and compile shapes.
	setContext('p45', p45)

	//@ctx p46-points
	// Array of grid points representing nodes on the grid.
	setContext('p46-points', points)

	//@ctx p46-selected-store
	// The currently selected grid point. Not to be confused with the currently
	// selected user shape.
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
		new UserShape(), //
	]

	userShapes[0].draw = [
		'move to U2',
		'quad curve to M22 control with V16',
		'quad curve to E2 control with D16',
		'quad curve to U2 control with M8',
		'close',
	].join('\n')

	userShapes[1].draw = [
		'move to R8',
		'curve to O10 control with R10',
		'move to H8',
		'curve to K10 control with H10',
		'move to I14',
		'curve to Q14 control with M20',
	].join('\n')

	//@ctx p46-axis-enabled-store
	// Writable store for enabling and disabling the `<Axis>` component.
	setContext('p46-axis-enabled-store', writable(true))

	//@ctx p46-guidelines-enabled-store
	// Writable store for enabling and disabling the `<Guidelines>` component.
	setContext('p46-guidelines-enabled-store', writable(true))

	//@ctx p46-points-enabled-store
	// Writable store for enabling and disabling the `<Points>` component.
	setContext('p46-points-enabled-store', writable(true))

	//@ctx p46-target-enabled-store
	// Writable store for enabling and disabling the `<Target>` component.
	setContext('p46-target-enabled-store', writable(true))

	//@ctx p46-rounded-enabled-store
	// Writable store for enabling and disabling rounded edges on shape lines.
	setContext('p46-rounded-enabled-store', writable(false))

	//@ctx p46-stroke-width-slider-store
	// Writable store for controlling the stroke width for shape lines.
	setContext('p46-stroke-width-slider-store', writable(1))

	//@ctx p46-user-shapes-store
	// Writable store containing the array of user shapes to draw on the grid.
	setContext('p46-user-shapes-store', writable(userShapes))

	//@ctx p46-selected-user-shape-store
	// Writable store containing the currently selected user shape.
	// Not to be confused with the currently selected grid point.
	setContext('p46-selected-user-shape-store', writable(userShapes[0]))
</script>

<div class="p46">
	{#if $$slots['before-grid']}
		<div class="p46-before-grid">
			<!--@slot before-grid
			 Content slotted above the grid. This is where all the control components
			 live. This will typically be one or more `<HeaderRow>` components
			 with various control components, e.g `<Axis>`, slotted into that.
			-->
			<slot name="before-grid" />
		</div>
	{/if}

	<Grid>
		<!--@slot before-shape
		 Content drawn on the grid underneath any shapes.
		-->
		<slot name="before-shape" />
		<ConsoleShapeDrawer />
		<!--@slot after-shape
		 Content drawn on the grid above any shapes.
		-->
		<slot name="after-shape" />
		<HitBoxes />
		<!--@slot after-hitbox
		 Content drawn on the grid after the hitboxes which are after the shapes.
		-->
		<slot name="after-hitbox" />
	</Grid>

	{#if $$slots['after-grid']}
		<div class="p46-after-grid">
			<!--@slot after-grid
			 Content slotted below the grid. This is where the `<Console>` component
			 is slotted.
			-->
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
