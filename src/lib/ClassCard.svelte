<script lang="ts">
  // When importing types or interfaces, note the syntax below
  import type { ClassType } from '../models/';

  import CardMedia from './CardMedia.svelte';
  import SaveClass from './SaveClass.svelte';

  // In order to expose props of a component we export them.
  // It's a syntax that took a while to get used to, but it
  // clicks after a bit. Exported props are required by default.
  // To make a prop optional, simply define a default value.
  export let cardsPerPage: number = 5;
  export let ss_class: ClassType;

  const { node } = ss_class;
  const {
    badges,
    title,
    largeCoverUrl,
    studentCount,
    durationInSeconds,
    teacher,
    viewer,
  } = node;
  const duration = getClassDuration(durationInSeconds);

  let saved: boolean = viewer.hasSavedClass ?? false;

  const badgeIcons = new Map([
    ['ORIGINAL', 'original-badge.svg'],
    ['STAFF_PICK', 'staff-pick-badge.svg'],
  ]);

  function getClassDuration(seconds: number) {
    const hours = Math.floor(seconds / 3600);
    const secondsMutated = seconds % 3600;
    const minutes = Math.floor(secondsMutated / 60);

    const hoursString = hours > 0 ? `${hours}h` : '';
    return `${hoursString} ${minutes}m`;
  }

  function toggleSaved() {
    saved = !saved;
  }
</script>

<style lang="scss">
  .class-card {
    background-color: var(--white);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    cursor: pointer;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    width: 100%;
  }

  header,
  footer {
    color: var(--meta-color);
    display: flex;
    font-size: var(--meta-font-size);
    justify-content: space-between;
    margin: var(--spacing);
  }

  footer {
    align-items: center;
  }

  .class-card-content {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    flex-grow: 1;
    font-size: var(--base-font-size);
    font-weight: bold;
    height: 60px;
    line-height: 1.33;
    margin: var(--spacing);
    overflow: hidden;
  }

  .badge {
    left: var(--spacing);
    position: absolute;
    top: var(--spacing);
    z-index: 2;

    img {
      height: 14px;
    }
  }
</style>

<div class="class-card" style="--cardsPerPage: {cardsPerPage}">
  <CardMedia filename={largeCoverUrl}>
    {#if badges.length > 0}
      <span class="badge"
        ><img src={`/${badgeIcons.get(badges[0].type)}`} alt="" /></span
      >
    {/if}
  </CardMedia>
  <header>
    <span>{studentCount} students</span>
    <span>{duration}</span>
  </header>
  <div class="class-card-content">
    {title}
  </div>
  <footer>
    <span>{teacher.name}</span>
    <SaveClass onClick={toggleSaved} {saved} />
  </footer>
</div>
