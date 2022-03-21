<script lang="ts">
	import { mdiBookmark } from '@mdi/js';

	import Icon from './Icon.svelte';

	export let saved: boolean = false;
	export let onClick: () => void = () => {};

	$: fill = saved ? '#3722d3' : '#ccc';
</script>

<div class="bookmark" on:click|stopPropagation={onClick}>
	<Icon path={mdiBookmark} {fill} />
</div>

<style>
	.bookmark {
		cursor: pointer;
	}
</style>
