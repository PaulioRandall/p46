<script>
	import { P45 } from 'p45'
	import P46 from '$lib/P46.svelte'
</script>

<main>
	<P46 p45={new P45(24)} />
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
</style>
