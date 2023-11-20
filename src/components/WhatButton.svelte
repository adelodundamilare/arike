<script lang="ts">
	import gsap from 'gsap';
	import WhatButton from './WhatButton.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const mouseEnterWhatIsThis = () => {
		gsap.to('#what-is-this-after', {
			xPercent: 100
		});
	};

	const mouseLeaveWhatIsThis = () => {
		gsap.from('#what-is-this-after', {
			xPercent: -100,
			duration: 0.5
		});
		gsap.to('#what-is-this-after', {
			xPercent: 0,
			duration: 0.5
		});
	};

	const handleClick = () => {
		dispatch('onClick');
	};
</script>

<div
	on:mouseenter={mouseEnterWhatIsThis}
	on:mouseleave={mouseLeaveWhatIsThis}
	on:click={handleClick}
	on:keyup={handleClick}
	class="block custom-link text-lg x-transparent"
>
	What is this website?
	<div id="what-is-this-after" class="custom-link__after" />
</div>

<style>
	.custom-link {
		cursor: pointer;
		overflow: hidden;
	}

	.custom-link__after {
		display: block;
		content: '';
		width: 100%;
		height: 1.4px;
		background-color: white;
		opacity: 1;
	}
</style>
