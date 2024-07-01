<script>
	/*@component
		Slotted into a `<P46>` component _before-grid_ slot to enable
		toggling of rounded line caps and joins. When disabled the
		`butt` type is used. This is applied to all shapes.
	*/

	import Toggle from './header/Toggle.svelte'
</script>

<Toggle storeName="p46-rounded-enabled-store">Rounded</Toggle>
