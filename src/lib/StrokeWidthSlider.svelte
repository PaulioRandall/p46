<script>
	import { getContext } from 'svelte'

	const strokeWidthStore = getContext('p46-stroke-width-slider-store')

	let value = $strokeWidthStore
	$: strokeWidthStore.set(value)
</script>

<div class="p46-stroke-width-slider">
	Line width
	<input
		class="p46-stroke-width-slider-input"
		type="range"
		min="0.05"
		max="2"
		step="0.05"
		bind:value />
	<output class="p46-stroke-width-slider-output">
		{$strokeWidthStore}
	</output>
</div>

<style>
	.p46-stroke-width-slider {
		display: flex;
		gap: 1rem;
		flex-grow: 1;

		padding: 0.5rem 1rem;
		background: #d0d0d0;
		border-radius: 0.4rem;

		min-width: 24rem;
		font-size: 1.2rem;
		align-items: center;

		white-space: nowrap;
	}

	@media (prefers-color-scheme: dark) {
		.p46-stroke-width-slider {
			background: #303040;
		}
	}

	.p46-stroke-width-slider-input {
		flex-grow: 1;
	}

	.p46-stroke-width-slider-output {
		width: 2.5rem;
		text-align: right;
	}
</style>
