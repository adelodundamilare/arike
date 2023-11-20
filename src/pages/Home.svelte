<script>
	import Body from '../components/Body.svelte';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
</script>

<div class="w-screen relative h-screen text-white overflow-hidden flex flex-col">
	<Header />
	<div class="flex-grow">
		<Body />
	</div>
	<div class=" w-full bottom-0 p-10">
		<Footer />
	</div>
</div>
