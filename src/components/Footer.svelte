<script lang="ts">
	import { onMount } from 'svelte';
	//
	import Love from './Love.svelte';
	import What from './What.svelte';

	onMount(() => {
		// if (mouseDistance < 60) {
		// 	gsap.to('#love-this', {
		// 		// xPercent: 100
		// 		backgroundColor: 'rgb(255 255 255 / 0.2)'
		// 	});
		// }
	});

	const year = new Date().toLocaleDateString([], { dateStyle: 'short' });
</script>

<div class="text-sm flex justify-between items-end">
	<div>
		<What />
	</div>
	<div class="flex items-center">
		<div class="font-works">Built with ❤️ for her 😘</div>
		<p class="font-cond uppercase">&copy DAMI::{year}</p>
	</div>
	<div>
		<Love />
	</div>
</div>
