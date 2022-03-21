<script lang="ts">
  import { afterUpdate } from 'svelte';

  export let cardsPerPage: number;
  export let pageIndex: number;
  export let pageCount: number;
  export let setPageIndex: (index: number) => void;

  interface VisiblePageProps {
    end: number;
    start: number;
  }

  let visiblePages: VisiblePageProps = { start: 0, end: cardsPerPage };

  function changePage(e: MouseEvent) {
    const el = e.currentTarget as HTMLDivElement;
    setPageIndex(parseInt(el.dataset.index));
  }

  function getCarouselDots() {
    const { end, hasHigherPages, hasLowerPages, start } = getPageRange(
      pageCount,
      pageIndex
    );

    return range(start, end).map((index: number) => {
      return {
        index,
        isLeading:
          (index === start && hasLowerPages) ||
          (index === end - 1 && hasHigherPages),
      };
    });
  }

  function getPageRange(pageLen: number, currentIndex: number) {
    let { start, end } = visiblePages;

    end = Math.min(end, pageLen);

    if (currentIndex >= end - 1 && end !== pageLen) {
      start = start + 1;
      end = end + 1;
    }

    if (currentIndex <= start && start !== 0) {
      start = start - 1;
      end = end - 1;
    }

    const hasHigherPages = end < pageLen;
    const hasLowerPages = start > 0;

    visiblePages = { start, end };

    return { end, hasHigherPages, hasLowerPages, start };
  }

  function range(start: number, end: number) {
    return Array.from(Array(Math.abs(end - start)), (_, i) => start + i);
  }

  let dots = getCarouselDots();

  afterUpdate(() => {
    dots = getCarouselDots();
  });
</script>

<style lang="scss">
  .container {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .dot {
    cursor: pointer;
    padding-top: 0;
    width: calc(var(--spacing) * 2);
  }

  .dot-content {
    background-color: var(--item-unselected);
    border-radius: 50%;
    height: calc(var(--spacing) * 1.5);
    margin: 0;
    top: 0;
    width: calc(var(--spacing) * 1.5);

    .dot.active & {
      background-color: var(--item-selected);
      transition-property: background-color, height, width;
      transition-duration: var(--transition-speed);
    }

    .leading & {
      height: var(--spacing);
      width: var(--spacing);
    }
  }
</style>

<div class="container">
  <div class="container">
    {#each dots as dot}
      <div
        data-index={dot.index}
        class="dot"
        class:active={dot.index === pageIndex}
        class:leading={dot.isLeading}
        on:click={changePage}
      >
        <div class="dot-content">&nbsp;</div>
      </div>
    {/each}
  </div>
</div>
