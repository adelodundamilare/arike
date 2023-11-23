<script lang="ts">
	import { onMount } from 'svelte';
	import dictionary from '../utils/dictionary';
	import gsap from 'gsap';

	//
	let letter: string = 'arike';
	let mainText: HTMLDivElement;

	//
	const getRandomSymbol = (item: string[]): string => {
		// please note the "-1"
		const len = item.length > 0 ? item.length - 1 : 0;
		const randomNumber = Math.round(Math.random() * len);
		return item[randomNumber];
	};

	const findInDictionary = (letter: string): string => {
		const item = dictionary[letter as keyof typeof dictionary];
		if (!item || item?.length < 1) return letter.toUpperCase();
		return getRandomSymbol([...item]);
	};

	const getLetterSymbols = (): string[] => {
		const arrLetters = [...letter];
		return arrLetters.map((item) => findInDictionary(item));
	};

	const letterArr = [...letter.toUpperCase()];
	let hoverEffect = getLetterSymbols();

	gsap.delayedCall(1, () => {});

	const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

	onMount(() => {
		tl.from(mainText, {
			scale: 0.9,
			onComplete: () => {
				hoverEffect = getLetterSymbols();
			}
			// duration: 0.5
		});
		tl.to(mainText, {
			scale: 1,
			ease: 'elastic.out(1,0.3)',
			duration: 1
			// onComplete: () => {
			// 	hoverEffect = getLetterSymbols();
			// }
			// duration: 0.5
		});
	});

	// setInterval(() => {
	// 	hoverEffect = getLetterSymbols();

	// 	gsap.to(mainText, {
	// 		y: 1000,
	// 		// scale: 1.1,
	// 		delay: 1
	// 		// duration: 0.5
	// 	});
	// }, 1000);

	const handleMouseOver = () => {
		tl.pause();
	};

	const handleMouseLeave = () => {
		tl.play();
	};
</script>

<div class="flex h-full items-center flex-col justify-center">
	<div class="">
		<div class="flex relative">
			<div
				on:mouseenter={handleMouseOver}
				on:mouseleave={handleMouseLeave}
				bind:this={mainText}
				class="main-text scale-75"
			>
				{hoverEffect.join('')}
			</div>
		</div>
	</div>
</div>

<style>
	.main-text {
		outline-color: #90ff21;
		font-size: 10vw;
		text-transform: uppercase;
		font-family: 'Condensed';
		line-height: normal;
		letter-spacing: -8px;
		cursor: pointer;
		color: #cccfca;
		text-shadow: 0 0 8px #cccfcabf;
	}

	@media (max-width: 508px) {
		.main-text {
			font-size: 25vw;
		}
	}

	div[id^='letter-'] {
		transition: transform ease-in-out 0.5s;
	}

	div[id^='letter-']:hover {
		transform: translateY(-100%);
	}
</style>
