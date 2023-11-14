<script lang="ts">
	let time: string;
	// get state, country, time and zone
	setInterval(() => {
		time = new Date().toLocaleTimeString([], { timeStyle: 'short' });
	}, 1000);
</script>

<div class="flex justify-between px-10 py-5">
	<div class="custom-link" />
	<div class="text-right text-sm">
		<div class="uppercase text-gray-400">Lagos, NG</div>
		<p class="font-mono uppercase">{time} WAT</p>
	</div>
</div>

<style>
</style>
