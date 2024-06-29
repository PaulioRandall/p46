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
	}
</style>
