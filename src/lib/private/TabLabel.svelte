<script>
	export let highlight = false
</script>

<div class="p46-tab-label" class:p46-tab-label-highlight={highlight}>
	<slot />
</div>

<style>
	.p46-tab-label {
		display: flex;
		background-color: #303030;

		border-radius: 0.4rem 0.4rem 0 0;
		border: 2px solid MediumSlateBlue;
		border-bottom: 1px solid dimgrey;

		overflow: hidden;
	}

	.p46-tab-label-highlight {
		box-shadow: inset 0 0 5px 2px crimson;
		border: 2px solid crimson;
		border-bottom: 1px solid dimgrey;
	}

	.p46-tab-label:hover {
		background: #484848;
	}
</style>
