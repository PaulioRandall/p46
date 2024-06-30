<script>
	export let highlight = false
	export let width = '9.5rem'
</script>

<div
	class="p46-tab-label"
	class:p46-tab-label-highlight={highlight}
	style="width: {width};">
	<slot />
</div>

<style>
	.p46-tab-label {
		display: flex;

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
</style>
