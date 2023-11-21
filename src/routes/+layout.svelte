<script lang="ts">
	import gsap from 'gsap';
	//
	import Helpers from '../utils/helpers';
	import '../app.css';
	import { isLoadingPreloader } from '../store';
	import Preloader from '../components/Preloader.svelte';
	//
	let cursor: HTMLElement;

	const handleMouseMove = (e: MouseEvent) => {
		const { x, y } = Helpers.getMousePosition(e);
		moveCursor(x, y);
	};

	const moveCursor = (x: number, y: number) => {
		gsap.to(cursor, {
			x,
			y
		});
	};
</script>

<div id="app">
	{#if $isLoadingPreloader === true}
		<Preloader />
	{:else}
		<main on:mousemove={handleMouseMove} id="main" class="relative overflow-hidden">
			<slot />
			<!-- cursor -->
			<div bind:this={cursor} class="relative x-cursor-pointer">
				<svg class="absolute" fill="none" viewBox="0 0 86 24"
					><path
						d="M7.237 23.5.5 16.764V7.237L7.237.5h71.526L85.5 7.237v9.527L78.763 23.5H7.237Z"
						stroke="#484B45"
					/></svg
				>
			</div>
		</main>
	{/if}
</div>

<style>
	.x-cursor-pointer {
		width: 22px;
		height: 22px;
		border-radius: 100%;
		border: none;
		overflow: hidden;
		z-index: 0;
		position: absolute;
		/* background: rgba(255, 255, 255, 0.15); */
		border: 1px solid rgba(255, 255, 255, 0.5);
		left: 0;
		top: 0;
	}
</style>
