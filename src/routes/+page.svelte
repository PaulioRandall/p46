<script>
	import {
		P46, //
		HeaderRow,
		AxisToggle,
		Axis,
		GuidelinesToggle,
		Guidelines,
		PointsToggle,
		Points,
		TargetToggle,
		Target,
		Console,
		CopyCoordsButton,
	} from '$lib'
</script>

<main>
	<P46 size="24">
		<HeaderRow slot="before-grid">
			<AxisToggle />
			<GuidelinesToggle />
			<PointsToggle />
			<TargetToggle />
			<CopyCoordsButton />
		</HeaderRow>

		<svelte:fragment slot="before-shape">
			<Axis />
			<Guidelines />
			<Points />
		</svelte:fragment>

		<svelte:fragment slot="after-shape">
			<Target />
		</svelte:fragment>

		<Console slot="after-grid" />
	</P46>
</main>

<style>
	main {
		width: 100dvw;
		min-height: 100dvh;
		padding: 2rem;

		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
