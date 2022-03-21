<script lang="ts">
  export let cardsPerPage: number = null;

  const itemWidth = `calc((100% - (${
    cardsPerPage - 1
  } * 12px)) / ${cardsPerPage})`;
</script>

<style>
  .container {
    display: flex;
    flex: 1 0 var(--item-width);
    width: var(--item-width);
  }
</style>

<div class="container" style="--item-width: {itemWidth}">
  <slot />
</div>
