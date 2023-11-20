<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	//
	import Love from './Love.svelte';
	import What from './What.svelte';

	let whatBox: HTMLElement;

	onMount(() => {
		gsap.to(whatBox, {
			y: 0
		});
	});

	const year = new Date().toLocaleDateString([], { dateStyle: 'short' });
</script>

<div class="text-sm flex justify-between items-end">
	<div class="overflow-hidden">
		<div bind:this={whatBox} class="translate-y-10">
			<What />
		</div>
	</div>
	<div>
		<Love />
	</div>
</div>
