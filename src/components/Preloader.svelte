<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { isLoadingPreloader } from '../store';

	let bigBox: HTMLElement;
	let smallBox: HTMLElement;
	let smallLine: HTMLElement;
	let topBg: HTMLElement;
	let bottomBg: HTMLElement;
	let mainLine: HTMLElement;

	onMount(() => {
		gsap.to(smallBox, {
			rotateZ: 360,
			scale: 0.8,
			ease: 'back.inOut(2)',
			duration: 2,
			onComplete: () => {
				gsap.to(smallBox, {
					opacity: 0
				});
			}
		});
		gsap.to(bigBox, {
			scale: 0.8,
			duration: 1,
			ease: 'back.inOut(2)',
			delay: 0.5,
			onComplete: () => {
				gsap.to(bigBox, {
					opacity: 0
				});
			}
		});
		gsap.to(smallLine, {
			x: 0,
			delay: 0.5,
			ease: 'expo.inOut',
			duration: 1,
			onComplete: () => {
				gsap.to(smallLine, {
					opacity: 0
				});
				gsap.to(mainLine, {
					opacity: 0
				});
			}
		});
		gsap.to(topBg, {
			yPercent: -100,
			delay: 1.5,
			ease: 'expo.inOut'
			// onComplete: () => {
			// 	gsap.to(topBg, {
			// 		opacity: 0
			// 	});
			// }
		});
		gsap.to(bottomBg, {
			yPercent: 100,
			delay: 1.5,
			ease: 'expo.inOut',
			onComplete: () => {
				isLoadingPreloader.set(false);
			}
		});
	});
</script>

<section class="flex items-center justify-center h-screen relative overflow-hidden">
	<div bind:this={topBg} class="w-full absolute bg-black h-[50vh] bg-opacity-10 top-0" />
	<div bind:this={bottomBg} class="w-full absolute bg-black h-[50vh] bg-opacity-10 bottom-0" />
	<!-- <div class="w-full bg-black h-[50vh]" /> -->
	<div class="w-[400px] h-[400px]">
		<div bind:this={bigBox} class="w-full rounded-lg bg-white bg-opacity-5 h-full block p-20">
			<div bind:this={smallBox} class="w-full rounded-lg h-full bg-white bg-opacity-5 block" />
		</div>
	</div>
	<div
		bind:this={mainLine}
		class="absolute w-full bg-gray-700 bg-opacity-10 h-[1px] overflow-hidden"
	>
		<div
			bind:this={smallLine}
			class="absolute w-full h-full bg-white bg-opacity-20 -translate-x-[100%]"
		/>
	</div>
</section>

<style>
	/* .x-bg-big {
		background-color: rgb(var(--bg-color), 0.6);
	}
	.x-bg-small {
		background-color: rgb(var(--bg-color), 0.4);
	} */
</style>
