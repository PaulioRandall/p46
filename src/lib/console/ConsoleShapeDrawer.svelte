<script>
	import { getContext } from 'svelte'
	import { Shape } from 'p45'

	const userShapesStore = getContext('p46-user-shapes-store')
	const roundedStore = getContext('p46-rounded-enabled-store')

	$: lineType = $roundedStore ? 'round' : 'butt'
</script>

{#each $userShapesStore as shape (shape.id)}
	<Shape
		draw={shape.draw}
		fill="transparent"
		stroke-linecap={lineType}
		stroke-linejoin={lineType} />
{/each}
