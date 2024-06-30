<script>
	import { getContext } from 'svelte'

	const p45 = getContext('p45')
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	viewBox="0 0 {p45.size + 2} {p45.size + 2}"
	preserveAspectRatio="xMidYMid"
	aria-hidden="true"
	stroke="transparent"
	fill="transparent"
	class="p46-grid">
	<g transform="translate(1,1)">
		<slot />
	</g>
</svg>
