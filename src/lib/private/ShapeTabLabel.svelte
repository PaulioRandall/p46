<script>
	import { getContext } from 'svelte'
	import TabLabel from './TabLabel.svelte'

	const userShapesStore = getContext('p46-user-shapes-store')
	const selectedShapeStore = getContext('p46-selected-user-shape-store')

	export let shape

	const setAsSelectedUserShape = () => {
		selectedShapeStore.set(shape)
	}

	const delUserShape = () => {
		userShapesStore.update((data) => {
			if (data.length <= 1) {
				return data
			}

			const idx = findUserShapeIndex(data, shape.id)

			if (idx !== null) {
				data.splice(idx, 1)
				const lastIdx = data.length - 1
				selectedShapeStore.set(data[lastIdx])
			}

			return data
		})
	}

	const findUserShapeIndex = (shapes, id) => {
		for (let i = 0; i < shapes.length; i++) {
			if (shapes[i].id === id) {
				return i
			}
		}
		return null
	}
</script>

<TabLabel
	highlight={$selectedShapeStore.id === shape.id}
	on:click={setAsSelectedUserShape}>
	{shape.id}
	<button slot="after" class="p46-shape-tab-del-button" on:click={delUserShape}>
		X
	</button>
</TabLabel>

<style>
	.p46-shape-tab-del-button {
		height: 100%;
		padding: 0 0.75rem;
		cursor: pointer;
	}
</style>
