<script>
	import {
		P46, //
		HeaderRow,
		AxisToggle,
		GuidelinesToggle,
		PointsToggle,
		TargetToggle,
		CopyCoordsButton,
	} from '$lib'
</script>

<main>
	<P46 size="24">
		<svelte:fragment slot="header">
			<HeaderRow>
				<AxisToggle />
				<GuidelinesToggle />
				<PointsToggle />
				<TargetToggle />
				<CopyCoordsButton />
			</HeaderRow>
		</svelte:fragment>
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
