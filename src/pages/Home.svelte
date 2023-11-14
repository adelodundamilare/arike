<script>
	import Body from '../components/Body.svelte';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
</script>

<div class="w-screen h-screen bg-black text-white overflow-hidden flex flex-col">
	<Header />
	<div class="flex-grow">
		<Body />
	</div>
	<Footer />
</div>
