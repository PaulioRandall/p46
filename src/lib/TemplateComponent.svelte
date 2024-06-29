<script context="module">
	//@prop moduleProp
	// Description of the module prop.
	// @module
	// @const
	export const moduleProp = 'Value'
</script>

<script>
	import { setContext } from 'svelte'

	/*@component
		Component description.
	*/

	//@prop prop
	// Description of the prop.
	// @default "Default value"
	// @alias p
	export let prop = 'Default value'
	export let p = prop

	//@ctx ctx
	// Description of the set context.
	setContext('ctx', 'value')
</script>

<div class="template-component">
	<!--@slot
		Default slot description.
	-->
	<slot />

	<!--@slot name
		Named slot description.
	-->
	<slot name="name" />
</div>

<style>
	.template-component {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
