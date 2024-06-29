<script>
	import { getContext } from 'svelte'
	import TabLabel from './TabLabel.svelte'
	import UserShape from './UserShape'

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

<TabLabel on:click={addNewUserShape}>+</TabLabel>
