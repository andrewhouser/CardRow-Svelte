<script lang="ts">
  import type { ClassType } from 'src/models';

  import CardRowCarousel from './CardRowCarousel.svelte';

  export let cards: ClassType[] = [];
  export let title: string;

  const cardsPerPage = 5;
</script>

<style>
  h3 {
    font-size: var(--title-font-size);
    font-weight: bold;
    margin: 0 0 calc(var(--spacing) * 2);
    padding: 0 var(--spacing);
  }
</style>

<h3>{title}</h3>

<!--
	Notice we don't need to declare out properties like cards={cards}? 
	Svelte affords us the shortcut below. It takes a little getting used
	to (I thought), but once you are used to it, anything else seems odd.
-->
<CardRowCarousel {cards} {cardsPerPage} />

<!-- 
	Note that there is no export of a module. Svelte compiles all this
	into a module and exports it for you. All you do it write HTML, CSS, & JS
-->
