<script>
	import { getContext } from 'svelte'

	import Points from './Points.svelte'
	import Axis from './Axis.svelte'
	import Hitboxes from './Hitboxes.svelte'
	import Target from './Target.svelte'

	const p45 = getContext('p45')

	const axisEnabledStore = getContext('p46-axis-enabled-store')
	const pointsEnabledStore = getContext('p46-points-enabled-store')
	const targetEnabledStore = getContext('p46-target-enabled-store')
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	viewBox="0 0 {p45.size + 2} {p45.size + 2}"
	preserveAspectRatio="xMidYMid"
	aria-hidden="true"
	stroke="transparent"
	fill="darkgrey"
	class="p46-ref-grid">
	{#if $axisEnabledStore}
		<Axis />
	{/if}

	{#if $pointsEnabledStore}
		<Points />
	{/if}

	<g transform="translate(1,1)">
		<slot />
	</g>

	<Hitboxes />

	{#if $targetEnabledStore}
		<Target />
	{/if}
</svg>
