<button class="p46-button" on:click {...$$restProps}>
	<slot />
</button>

<style>
	.p46-button {
		flex-grow: 1;

		display: flex;
		justify-content: center;
		background: #d0d0d0;

		min-width: 8rem;
		padding: 0.5rem 1rem;
		border-radius: 0.4rem;

		font-size: 1.2rem;
		cursor: pointer;
	}

	@media (prefers-color-scheme: dark) {
		.p46-button {
			background: #303040;
		}
	}
</style>
