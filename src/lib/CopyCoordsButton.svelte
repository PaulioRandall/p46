<script>
	/*@component
		Slotted into a `<P46>` component _before-grid_ slot
		so users view the currently selected node and,
		upon click, copy the node to clipboard.
	*/

	import { getContext } from 'svelte'
	import Button from './header/Button.svelte'

	const selectedStore = getContext('p46-selected-store')

	const copyText = () => {
		if ($selectedStore) {
			navigator?.clipboard?.writeText($selectedStore.node)
		}
	}

	$: selected = $selectedStore
</script>

{#if selected}
	<Button on:click={copyText}>
		<span style="font-weight: bold;">{selected.node}</span>
		&nbsp;({selected.x}:{selected.y})
	</Button>
{/if}
