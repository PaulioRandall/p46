<script>
	/*@component
		Slotted into a `<P46>` component _before-grid_ slot
		so users can download the SVG.
	*/

	import { getContext } from 'svelte'
	import generateSvg from './header/generate-svg'

	const grid = getContext('p45')
	const userShapeStore = getContext('p46-user-shapes-store')
	const strokeWidthStore = getContext('p46-stroke-width-slider-store')
	const roundedStore = getContext('p46-rounded-enabled-store')

	const createDownloadLink = () => {
		const data = generateSvg(
			grid,
			$userShapeStore,
			{
				'stroke-linecap': $roundedStore ? 'round' : 'butt',
				'stroke-linejoin': $roundedStore ? 'round' : 'butt',
				'stroke-width': $strokeWidthStore,
				'stroke': 'currentColor',
				'fill': 'transparent',
			},
			{
				'stroke-linecap': $roundedStore ? 'round' : 'butt',
				'stroke-linejoin': $roundedStore ? 'round' : 'butt',
			}
		)
		const encodedData = btoa(data)

		return {
			download: `${$userShapeStore[0].id}.svg`,
			href: `data:image/svg+xml;charset=utf-8;base64,${encodedData}`,
		}
	}

	$: download = createDownloadLink(
		$userShapeStore,
		$strokeWidthStore,
		$roundedStore
	)
</script>

<a
	role="button"
	class="p46-download-svg-button"
	href={download.href}
	download={download.download}
	target="_blank">
	Download SVG
</a>

<style>
	.p46-download-svg-button {
		flex-grow: 1;

		display: flex;
		justify-content: center;
		background: #d0d0d0;

		min-width: 8rem;
		padding: 0.5rem 1rem;
		border-radius: 0.4rem;

		user-select: none;
		font-size: 1.2rem;
		cursor: pointer;
	}

	@media (prefers-color-scheme: dark) {
		.p46-download-svg-button {
			background: #303040;
		}
	}
</style>
