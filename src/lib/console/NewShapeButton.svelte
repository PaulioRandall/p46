<script>
	import { getContext } from 'svelte'
	import TabLabel from './TabLabel.svelte'
	import UserShape from '../grid/UserShape'

	const userShapesStore = getContext('p46-user-shapes-store')
	const selectedShapeStore = getContext('p46-selected-user-shape-store')

	const addNewUserShape = () => {
		userShapesStore.update((data) => {
			const s = new UserShape()
			data.push(s)
			selectedShapeStore.set(s)
			return data
		})
	}
</script>

<TabLabel width="3rem">
	<button class="p46-new-shape-button" on:click={addNewUserShape}> + </button>
</TabLabel>

<style>
	.p46-new-shape-button {
		cursor: pointer;
		padding: 0.75rem 1rem;
		margin: auto;
		transform: scale(1.6);
	}

	.p46-new-shape-button:hover {
		transform: scale(2.6);
	}
</style>
