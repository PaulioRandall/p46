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
		RoundedToggle,
		StrokeWidthSlider,
		Console,
		CopyCoordsButton,
		DownloadSvgButton,
	} from '$lib'
</script>

<main>
	<P46 size="24">
		<svelte:fragment slot="before-grid">
			<HeaderRow>
				<AxisToggle />
				<GuidelinesToggle />
				<PointsToggle />
				<TargetToggle />
			</HeaderRow>

			<HeaderRow>
				<StrokeWidthSlider />
			</HeaderRow>

			<HeaderRow>
				<CopyCoordsButton />
				<RoundedToggle />
				<DownloadSvgButton />
			</HeaderRow>
		</svelte:fragment>

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
