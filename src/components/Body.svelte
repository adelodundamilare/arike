<script lang="ts">
	import dictionary from '../utils/dictionary';
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
	//
	let letter: string = 'arike';
	const letterArr = [...letter.toUpperCase()];
	const hoverEffect = getLetterSymbols();
</script>

<div class="flex h-full items-center flex-col justify-center">
	<div class="">
		<div class="flex overflow-hidden relative">
			{#each letterArr as item, index}
				<div id={`letter-${index}`} class="relative text-center">
					<div class="main-text">{item}</div>
					<div class="absolute">
						<!-- <div class="text-2xl text-center">❤️</div> -->
						<!-- <div class="main-text">☻</div> -->
						<div class="main-text">{hoverEffect[index]}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="relative cursor-pointer">
		<svg class="absolute -mt-2" fill="none" viewBox="0 0 86 24"
			><path
				d="M7.237 23.5.5 16.764V7.237L7.237.5h71.526L85.5 7.237v9.527L78.763 23.5H7.237Z"
				stroke="#484B45"
			/></svg
		>
		<a href="/" class="font-mono text-sm px-4">Explore Timeline</a>
	</div>
</div>

<style>
	.main-text {
		outline-color: #90ff21;
		font-size: 10vw;
		text-transform: uppercase;
		font-family: 'Condensed';
		/* font-family: 'Mono'; */
		line-height: normal;
		letter-spacing: -8px;
		cursor: pointer;
		color: #cccfca;
		text-shadow: 0 0 8px #cccfcabf;
	}

	div[id^='letter-'] {
		transition: transform ease-in-out 0.5s;
	}

	div[id^='letter-']:hover {
		transform: translateY(-100%);
	}
</style>
