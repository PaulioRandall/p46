<script>
	import { getContext } from 'svelte'
	import TabLabel from './TabLabel.svelte'
	import UserShape from './UserShape'

	const userShapesStore = getContext('p46-user-shapes-store')
	const selectedShapeStore = getContext('p46-selected-user-shape-store')

	const delUserShape = () => {
		userShapesStore.update((data) => {
			const id = $selectedShapeStore.id
			const idx = findUserShapeIndex(data, id)

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

<TabLabel on:click={delUserShape}>-</TabLabel>
