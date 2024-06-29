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
		ConsoleShapeDrawer,
		CopyCoordsButton,
	} from '$lib'
</script>

<main>
	<P46 size="24">
		<HeaderRow slot="header">
			<AxisToggle />
			<GuidelinesToggle />
			<PointsToggle />
			<TargetToggle />
			<CopyCoordsButton />
		</HeaderRow>

		<Axis />
		<Guidelines />
		<Points />
		<ConsoleShapeDrawer />
		<Target />

		<Console slot="footer" />
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
