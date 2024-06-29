<script>
	import TemplateComponent from '$lib/TemplateComponent.svelte'
</script>

<main>
	<TemplateComponent>
		<h1 class="heading">Heading</h1>
		<p>Content</p>
		<p>Content</p>
		<p>Content</p>
	</TemplateComponent>
</main>

<style>
	main {
		width: 100dvw;
		min-height: 100dvh;
		padding: 2rem;

		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.test-content {
		font-size: max(32px, 2rem);
	}
</style>
