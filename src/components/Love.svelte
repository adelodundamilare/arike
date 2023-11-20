<script lang="ts">
	import gsap from 'gsap';
	import { layoutOverlayBgClicked, showLayoutOverlay } from '../store';
	import LoveButton from './LoveButton.svelte';

	let modalOverlayBg: HTMLElement;
	let paragraphParent: HTMLElement;
	let overlayBg: HTMLElement;

	const paragraphs: string[] = [
		'Love this?',
		"WOW! I'm soooo glad you do 😁",
		"Please don't hesitate to shoot me a mail if:",
		"👉 You're in love with what you see and would like to send compliments",
		'👉 You feel this is good/bad and can be improved in certain areas',
		"👉 You have interesting projects you'll like us to talk about"
	];

	const onClickOverlay = () => {
		hideLoveContent();
	};

	const showLoveContent = () => {
		// show the layout overlay...
		gsap.to(overlayBg, {
			display: 'block',
			opacity: 1
		});

		// show the background...
		gsap.to(modalOverlayBg, {
			x: 0,
			opacity: 1
		});

		// show the texts...
		const $ = gsap.utils.selector(paragraphParent);
		gsap.to([$('p'), $('h3')], {
			y: 0,
			opacity: 1,
			delay: 0.5
		});
	};

	const hideLoveContent = () => {
		// show the texts...
		const $ = gsap.utils.selector(paragraphParent);
		gsap.to([$('p'), $('h3')], {
			y: 100
			// opacity: 0
		});

		// show the background...
		gsap.to(modalOverlayBg, {
			x: 1000,
			// opacity: 0,
			delay: 0.5
		});

		// hide main background...
		gsap.to(overlayBg, {
			display: 'none',
			opacity: 0
		});
	};
</script>

<div class="x-blurred-bg z-10">
	<div class="-right-5 -bottom-5 absolute z-20 w-[400px] rounded-lg overflow-hidden">
		<div bind:this={paragraphParent} class="relative w-full p-10">
			<!-- paragraphs -->
			{#each paragraphs as p, index}
				<div class="overflow-hidden mb-5">
					{#if index === 0}
						<h3 class="translate-y-[100%] opacity-0 text-xl">{p}</h3>
					{:else}
						<p class="translate-y-[100%] opacity-0">{p}</p>
					{/if}
				</div>
			{/each}
			<!-- mini background -->
			<div
				bind:this={modalOverlayBg}
				class="left-0 absolute translate-x-[100%] top-0 z-0 bg-white bg-opacity-5 w-full h-full"
			/>
		</div>
	</div>

	<!-- main-background -->
	<div
		bind:this={overlayBg}
		on:keydown={() => {}}
		on:click={onClickOverlay}
		class="-right-10 opacity-0 hidden -bottom-10 x-overlay-bg absolute z-10"
	>
		<div class="relative w-screen h-screen" />
	</div>

	<!-- button -->
	<LoveButton on:showLoveContent={showLoveContent} />
</div>

<style>
	.x-overlay-bg {
		transition: transform 0.5s ease-in-out;
		background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.3));
		transform: translateX(0);
	}
</style>
