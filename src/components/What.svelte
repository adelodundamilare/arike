<script lang="ts">
	import gsap from 'gsap';
	import WhatButton from './WhatButton.svelte';

	let paragraphParent: HTMLDivElement;
	let modalOverlayBg: HTMLDivElement;
	let overlayBg: HTMLElement;

	const paragraphs: string[] = [
		'A short story... enjoy 😉',
		'TLDR; A project borne out of idleness',
		"Alright, one time - at work - during one sprint planning session like that, everyone were picking what they're to do then it got to my turn to choose tasks and my manager said NO! 🙁",
		"He asked that I go on holiday but lurk around to give support to other engineers. I don't know why - probably, trying to help me spend more time with my sweetheart. But I love work, I want to build amazing things.",
		'In his words, he said: "your task for this sprint is to give support". I\'m supposed to like this but unfortunately, i don\'t. I love work, I love building stuffs, I love creating amazing things using tech.',
		"Anyways, I resolved to toying with css transform and svelte using my sweetheart's name 😜 and this was birthed. 🥂"
	];

	const handleButtonClick = () => {
		gsap.to(overlayBg, {
			display: 'block',
			opacity: 1
		});

		gsap.to(paragraphParent, {
			scale: 1
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

	const hideModalContent = () => {
		// show the texts...
		const $ = gsap.utils.selector(paragraphParent);
		gsap.to([$('p'), $('h3')], {
			y: 100
		});

		// show the background...
		gsap.to(modalOverlayBg, {
			x: -1000,
			delay: 0.5
		});

		// hide main background...
		gsap.to(overlayBg, {
			display: 'none'
		});

		gsap.to(paragraphParent, {
			scale: 0,
			delay: 1
		});
	};
</script>

<div>
	<div
		bind:this={paragraphParent}
		class="rounded-lg scale-0 origin-bottom-left p-10 overflow-hidden z-30 absolute bottom-20 max-w-xl"
	>
		<div class="relative z-10">
			{#each paragraphs as p, index}
				<div class="overflow-hidden mb-5">
					{#if index === 0}
						<h3 class="translate-y-[100%] opacity-0 text-xl">{p}</h3>
					{:else}
						<p class="translate-y-[100%] opacity-0">{p}</p>
					{/if}
				</div>
			{/each}
		</div>
		<div
			bind:this={modalOverlayBg}
			class="absolute x-blurred-bg -translate-x-[100%] left-0 top-0 z-0 bg-white bg-opacity-5 w-full h-full"
		/>
	</div>

	<div class="relative z-30">
		<WhatButton on:onClick={handleButtonClick} />
	</div>

	<!-- main-background -->
	<div
		bind:this={overlayBg}
		on:keydown={() => {}}
		on:click={hideModalContent}
		class="-left-0 hidden opacity-0 -bottom-0 x-overlay-bg absolute z-10"
	>
		<div class="relative w-screen h-screen" />
	</div>
</div>

<style>
	.x-overlay-bg {
		transition: transform 0.5s ease-in-out;
		background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.3));
		transform: translateX(0);
	}
</style>
