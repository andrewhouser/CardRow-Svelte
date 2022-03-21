<script lang="ts">
	import CardRowCarouselBar from './CardRowCarouselBar.svelte';
	import CardRowCarouselItem from './CardRowCarouselItem.svelte';
	import ClassCard from '$lib/ClassCard.svelte';
	import type { ClassType } from 'src/models';
	import { spacing } from '../vars';

	export let cards: ClassType[];
	export let cardsPerPage: number;

	const pageCount = Math.ceil(cards.length / cardsPerPage);
	let pageIndex = 0;

	$: transformPercent = `calc(${pageIndex * -100}% - (${spacing * 1.5}px * ${pageIndex}) )`;

	function setPageIndex(index: number) {
		if (index < 0) pageIndex = 0;
		if (index > pageCount) pageIndex = pageCount;
		pageIndex = index;
	}
</script>

<div class="wrapper">
	<div class="wrapper-inner">
		<div class="overflow-container" style="--transform-percent: {transformPercent}">
			{#each cards as ss_class}
				<CardRowCarouselItem {cardsPerPage}>
					<ClassCard {ss_class} {cardsPerPage} />
				</CardRowCarouselItem>
			{/each}
		</div>
	</div>

	<CardRowCarouselBar {cardsPerPage} {pageIndex} {pageCount} {setPageIndex} />
</div>

<style>
	.wrapper {
		box-sizing: border-box;
		position: relative;
	}

	.wrapper-inner {
		box-sizing: border-box;
		height: 100%;
		margin-bottom: calc(var(--spacing) * 2);
		overflow: hidden;
		position: relative;
	}

	.overflow-container {
		display: flex;
		gap: 0 calc(var(--spacing) * 1.5);
		height: 100%;
		padding: calc(var(--spacing) * 0.5) 0;
		position: relative;
		transform: translate(var(--transform-percent));
		transition: transform var(--transition-speed) ease-in-out;
	}
</style>
