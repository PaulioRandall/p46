<script>
	/*@component
		Slotted into a `<P46>` component _before-grid_ slot to enable
		toggling of the `<Target>` component if it's used.
	*/

	import Toggle from './header/Toggle.svelte'
</script>

<Toggle storeName="p46-target-enabled-store">Target</Toggle>
