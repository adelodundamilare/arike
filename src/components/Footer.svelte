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
</script>

<div class="text-sm flex sm:flex-col-reverse justify-between items-end">
	<div class="overflow-hidden">
		<div bind:this={whatBox} class="translate-y-10">
			<What />
		</div>
	</div>
	<div class="sm:mb-5">
		<Love />
	</div>
</div>
