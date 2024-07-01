<!--@component
 Slotted into a `<P46>` component _before-grid_ slot
 to organise a row of header controls.
-->

<div class="p46-header-row">
	<!--@slot
	 Controls to be slotted, e.g. `<Axis>`, `<DownloadSvgButton>`, etc.
	-->
	<slot />
</div>

<style>
	.p46-header-row {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem;
		gap: 1rem;
	}
</style>
