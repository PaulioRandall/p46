<script>
	export let highlight = false
</script>

<div class="p46-tab-label" class:p46-tab-label-highlight={highlight}>
	<button class="p46-tab-button" on:click>
		<slot />
	</button>
	<slot name="after" />
</div>

<style>
	.p46-tab-label {
		display: flex;

		border-radius: 0.4rem 0.4rem 0 0;
		border: 2px solid MediumSlateBlue;
		border-bottom: 1px solid dimgrey;

		overflow: hidden;
		min-width: 2rem;
	}

	.p46-tab-label-highlight {
		box-shadow: inset 0 0 5px 2px crimson;
		border: 2px solid crimson;
		border-bottom: 1px solid dimgrey;
	}

	.p46-tab-button {
		padding: 0.5rem 1rem;
		cursor: pointer;
	}
</style>
