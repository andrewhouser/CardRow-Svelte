<script lang="ts">
  import data from '../data/row.json';
  import type { ClassType, RowType } from 'src/models';
  import { spacing } from '../vars';
  // $lib is an alias provided by default in SvelteKit (analagous to NextJS)
  // Other aliases can easily be created in svelte.config.js
  import CardRow from '$lib/CardRow.svelte';
  // There are two primary lifecycle methods - onMount and afterUpdate
  // These would be analagous to useEffect in React
  import { onMount } from 'svelte';

  const { node }: RowType = data;
  const { title, items }: { title: string; items: { edges: ClassType[] } } =
    node;

  onMount(() => {
    if (window) {
      document.documentElement.style.setProperty('--spacing', `${spacing}px`);
    }
  });
</script>

<!-- Svelte provides various browser object interfaces, like window, head, etc. -->
<svelte:head>
  <title>Card Row Component</title>
</svelte:head>

<CardRow cards={items.edges} {title} />
