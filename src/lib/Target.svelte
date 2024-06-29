<script>
	import { getContext } from 'svelte'

	const p45 = getContext('p45')
	const selectedStore = getContext('p46-selected-store')
	const targetEnabledStore = getContext('p46-target-enabled-store')

	$: selected = $selectedStore
</script>

{#if $targetEnabledStore && $selectedStore}
	{#if selected.x > 1}
		<line
			x1="0"
			y1={selected.y}
			x2={selected.x - 1}
			y2={selected.y}
			stroke="crimson"
			stroke-width="0.075"
			stroke-dasharray="0 0.25 0.25"
			class="p46-target-line" />
	{/if}

	{#if selected.x < p45.size}
		<line
			x1={selected.x + 1}
			y1={selected.y}
			x2={p45.size}
			y2={selected.y}
			stroke="crimson"
			stroke-width="0.075"
			stroke-dasharray="0 0.25 0.25"
			class="p46-target-line" />
	{/if}

	{#if selected.y > 1}
		<line
			x1={selected.x}
			y1="0"
			x2={selected.x}
			y2={selected.y - 1}
			stroke="crimson"
			stroke-width="0.075"
			stroke-dasharray="0 0.25 0.25"
			class="p46-target-line" />
	{/if}

	{#if selected.y < p45.size}
		<line
			x1={selected.x}
			y1={selected.y + 1}
			x2={selected.x}
			y2={p45.size}
			stroke="crimson"
			stroke-width="0.075"
			stroke-dasharray="0 0.25 0.25"
			class="p46-target-line" />
	{/if}

	<rect
		x={selected.x - 0.5 - 0.125}
		y={selected.y - 0.5 - 0.125}
		width="1.25"
		height="1.25"
		rx="1"
		fill="transparent"
		stroke="crimson"
		stroke-width="0.16"
		stroke-dasharray="0.17 0.314"
		class="p46-target-circle">
		<animateTransform
			attributeName="transform"
			type="rotate"
			begin="0s"
			dur="6s"
			from="0 {selected.x} {selected.y}"
			to="360 {selected.x} {selected.y}"
			repeatCount="indefinite" />
	</rect>
{/if}
