<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	let time: string = new Date().toLocaleTimeString([], { timeStyle: 'short' });
	let container: HTMLElement;
	let line: HTMLElement;

	const tl = gsap.timeline({});

	onMount(() => {
		tl.to(container, {
			y: 0
		});
		tl.to(line, {
			width: 20
		});
	});

	// get state, country, time and zone
	setInterval(() => {
		time = new Date().toLocaleTimeString([], { timeStyle: 'short' });
	}, 1000);
</script>

<div class="flex justify-between px-10 py-5">
	<div class="custom-link" />
	<div class="text-right text-sm overflow-hidden relative">
		<div bind:this={container} class="uppercase -translate-y-10 flex items-center text-lg">
			<span class="opacity-50">Lagos, NG</span>
			<span bind:this={line} class="inline-block opacity-50 w-1 h-[1px] bg-white mx-2" />
			<span class="uppercase">{time} WAT</span>
		</div>
	</div>
</div>
