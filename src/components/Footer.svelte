<script lang="ts">
	import What from './What.svelte';

	const year = new Date().toLocaleDateString([], { dateStyle: 'short' });
</script>

<div class="px-10 py-5 text-sm relative">
	<div class="absolute bottom-14 z-30 left-5 max-w-lg w-full">
		<What />
	</div>
	<div class="flex justify-between">
		<div class="text-lg x-transparent">
			<div class="block custom-link">What is this website?</div>
		</div>
		<div class="flex items-center">
			<div class="font-works">Built with ❤️ for her 😘</div>
			<p class="font-cond uppercase">&copy DAMI::{year}</p>
		</div>
	</div>
</div>

<style>
	.custom-link {
		cursor: pointer;
		overflow: hidden;
	}

	.custom-link::after {
		/* transition: transform ease-in-out 0.5s, opacity ease-in-out 0.5s; */
		/* transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1) 0s; */
		transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
		display: block;
		content: '';
		width: 100%;
		height: 1.4px;
		background-color: white;
		opacity: 1;
	}

	.custom-link:hover::after {
		transform: translateX(100%);
		/* opacity: 0.3; */
	}
</style>
