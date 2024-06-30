<script>
	import { getContext } from 'svelte'

	const shapesStore = getContext('p46-user-shapes-store')
	const selectedShapeStore = getContext('p46-selected-user-shape-store')

	const countLines = (shape) => {
		return shape?.draw.split('\n').length || 1
	}

	const updateShapeDraw = (event) => {
		const v = event.target.value
		if ($selectedShapeStore.draw === v) {
			return
		}

		$selectedShapeStore.draw = v
		shapesStore.set($shapesStore)
	}

	$: rows = countLines($selectedShapeStore, $shapesStore)
</script>

<textarea
	class="p46-console-tab-panel"
	{rows}
	value={$selectedShapeStore.draw}
	on:input={updateShapeDraw} />

<style>
	.p46-console-tab-panel {
		width: 100%;
		resize: vertical;
		padding: 1rem;
		font-size: 1rem;
		margin: 0;

		background: #e8e8e8;
		color: black;

		border: 1px solid dimgrey;
		border-radius: 0 0.15rem 0.3rem 0.3rem;
		outline: none;
	}

	@media (prefers-color-scheme: dark) {
		.p46-console-tab-panel {
			background: #303030;
			color: white;
			border-color: transparent;
		}
	}
</style>
