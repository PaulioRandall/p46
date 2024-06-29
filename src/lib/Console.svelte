<script>
	import { getContext } from 'svelte'
	import ShapeTabLabel from './private/ShapeTabLabel.svelte'
	import ConsoleTabPanel from './private/ConsoleTabPanel.svelte'
	import NewShapeButton from './private/NewShapeButton.svelte'

	const userShapesStore = getContext('p46-user-shapes-store')
</script>

<div class="p46-console">
	<div class="p46-console-tab-labels">
		{#each $userShapesStore as shape (shape.id)}
			<ShapeTabLabel {shape} />
		{/each}
		<NewShapeButton />
	</div>

	<div class="p46-console-tab-panels">
		<ConsoleTabPanel />
	</div>
</div>

<style>
	.p46-console {
		display: flex;
		flex-direction: column;
	}

	.p46-console-tab-labels {
		display: flex;
		gap: 0.2rem;
		z-index: 1;
	}

	.p46-console-tab-panels {
		display: flex;
	}
</style>
