<script>
	import { getContext } from 'svelte'

	import Points from './Points.svelte'
	import Guidelines from './Guidelines.svelte'
	import Axis from './Axis.svelte'
	import Hitboxes from './Hitboxes.svelte'
	import Target from './Target.svelte'

	export let p45
	export let points
	export let selected

	const axisEnabledStore = getContext('p46-axis-enabled-store')
	const guidelinesEnabledStore = getContext('p46-guidelines-enabled-store')
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
	{#if $guidelinesEnabledStore}
		<Guidelines {p45} {points} />
	{/if}

	{#if $axisEnabledStore}
		<Axis {p45} {points} />
	{/if}

	{#if $pointsEnabledStore}
		<Points {points} />
	{/if}

	<g transform="translate(1,1)">
		<slot />
	</g>

	<Hitboxes {points} bind:selected />

	{#if $targetEnabledStore}
		<Target {p45} {selected} />
	{/if}
</svg>
