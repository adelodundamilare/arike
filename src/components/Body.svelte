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
