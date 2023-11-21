<script context="module" lang="ts">
	export const animateLoveButton = (mouseZ: number, mouseY: number) => {
		console.log(mouseZ, mouseY);
		// if (!loveButton) return;
		// const { x, y } = Helpers.getElementCenter(loveButton);
		// const distance = 20;
		// const xDistance = x - mouseX;
		// const yDistance = y - mouseY;
		// if (xDistance > distance || yDistance > distance) {
		// 	gsap.to(loveButton, {
		// 		clearProps: 'all',
		// 		duration: 0
		// 	});
		// } else {
		// 	gsap.to(loveButton, {
		// 		x: -xDistance,
		// 		y: -yDistance,
		// 		duration: 0
		// 	});
		// }
	};

	const showLoveTexts = (tl: gsap.core.Timeline) => {
		// add padding to parent
		tl.to(parent, {
			padding: '20px',
			ease: 'power1.in'
		});
		// show the texts
		tl.to('.x-modal-texts-parent p', {
			y: 0,
			ease: 'power1.in'
		});
	};
</script>

<script lang="ts">
	import gsap from 'gsap';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	let loveButton: HTMLElement;
	let overlay: HTMLElement;

	const handleMouseOver = () => {
		gsap.to(overlay, {
			yPercent: -100,
			ease: 'power1.in'
		});
	};

	const handleMouseLeave = () => {
		gsap.to(overlay, {
			yPercent: 0,
			ease: 'power1.in'
		});
	};

	const onClickLoveButton = () => {
		dispatch('showLoveContent');
	};
</script>

<button
	on:mouseenter={handleMouseOver}
	on:mouseleave={handleMouseLeave}
	bind:this={loveButton}
	on:click={onClickLoveButton}
	type="button"
	class="bg-white z-50 relative overflow-hidden bg-opacity-20 px-4 py-2 rounded-lg"
>
	<p class="z-20 relative text-lg">❤️ Love this?</p>
	<div
		bind:this={overlay}
		class="absolute z-10 left-0 bottom-0 translate-y-[100%] w-full h-full bg-white bg-opacity-30"
	/>
</button>
