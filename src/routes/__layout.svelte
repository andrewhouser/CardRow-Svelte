<script lang="ts">
  import '../app.css';
</script>

<style>
  main {
    padding: calc(var(--spacing) * 2);
  }
</style>

<!--
	Unlike children in React, Svelte provides slots.
	Here a single slot is provided, so children will be rendered
	there. Svelte also allows for named slots, so children can be
	target to specific (or dynamic!) areas.
-->
<main>
  <slot />
</main>
