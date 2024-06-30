<script>
	import { getContext } from 'svelte'
	import { Shape } from 'p45'

	const userShapesStore = getContext('p46-user-shapes-store')
</script>

{#each $userShapesStore as shape (shape.id)}
	<Shape draw={shape.draw} fill="transparent" />
{/each}
