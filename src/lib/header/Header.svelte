<script>
	import CoordInfo from './CoordInfo.svelte'

	export let selected
</script>

<div class="p46-header">
	<div class="p46-header-row">
		<CoordInfo {selected} />
	</div>
</div>

<style>
	.p46-header {
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
		gap: 1rem;
		width: 100%;
	}

	.p46-header-row {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem;
		gap: 1rem;
	}
</style>
