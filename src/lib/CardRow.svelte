<script lang="ts">
	import type { ClassType } from 'src/models';

	import CardRowCarousel from './CardRowCarousel.svelte';

	export let cards: ClassType[] = [];
	export let title: string;

	const cardsPerPage = 5;
</script>

<h3>{title}</h3>

<CardRowCarousel {cards} {cardsPerPage} />

<style>
	h3 {
		font-size: var(--title-font-size);
		font-weight: bold;
		margin: 0 0 calc(var(--spacing) * 2);
		padding: 0 var(--spacing);
	}
</style>
