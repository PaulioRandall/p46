<button class="p46-button" on:click {...$$restProps}>
	<slot />
</button>

<style>
	.p46-button {
		flex-grow: 1;

		display: flex;
		justify-content: center;

		min-width: 8rem;
		padding: 0.5rem 1rem;
		border-radius: 0.4rem;

		font-size: 1.2rem;
		cursor: pointer;
	}
</style>
