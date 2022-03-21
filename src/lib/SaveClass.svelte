<script lang="ts">
  import { mdiBookmark } from '@mdi/js';

  import Icon from './Icon.svelte';

  export let saved: boolean = false;
  export let onClick: () => void = () => {};

  // The following syntax ($:) makes the variable update
  // whenever saved is updated with a new value
  $: fill = saved ? '#3722d3' : '#ccc';
</script>

<style>
  .bookmark {
    cursor: pointer;
  }
</style>

<!--
	Svelte allows for very handy event modifiers to be inlined
	Here, stopPropogation is not handed in the onClick method, but
	Svelte will catch the event and stop the propogation for you.
	Handy, no?
-->
<div class="bookmark" on:click|stopPropagation={onClick}>
  <Icon path={mdiBookmark} {fill} />
</div>
