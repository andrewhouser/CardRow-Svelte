<script lang="ts">
	import '../app.css';
</script>

<main>
	<slot />
</main>

<style>
	main {
		padding: calc(var(--spacing) * 2);
	}
</style>
