<script>
	import { getContext } from 'svelte'
	import Button from './Button.svelte'

	export let storeName

	const stateStore = getContext(storeName)

	const toggle = (event) => {
		event.stopImmediatePropagation()
		stateStore.set(!$stateStore)
	}
</script>

<Button on:click={toggle}>
	<slot />
	<input type="checkbox" checked={$stateStore} class="p46-toggle-checkbox" />
</Button>

<style>
	.p46-toggle-checkbox {
		pointer-events: none;
	}
</style>
