<script lang="ts">
	import data from '../data/row.json';
	import type { ClassType, RowType } from 'src/models';
	import { spacing } from '../vars';
	import CardRow from '$lib/CardRow.svelte';
	import { onMount } from 'svelte';

	const { node }: RowType = data;
	const { title, items }: { title: string; items: { edges: ClassType[] } } = node;

	onMount(() => {
		if (window) {
			document.documentElement.style.setProperty('--spacing', `${spacing}px`);
		}
	});
</script>

<svelte:head>
	<title>Card Row Component</title>
</svelte:head>

<CardRow cards={items.edges} {title} />
