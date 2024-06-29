<script>
	import { getContext } from 'svelte'
	import Button from './private/Button.svelte'

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
		({selected.x}:{selected.y})
	</Button>
{/if}
