<script lang="ts">
  import { mdiPlayCircle } from '@mdi/js';
  import Icon from './Icon.svelte';

  export let filename: string;

  const style = `background-image: url("${filename}");`;
</script>

<!--
	Plain old Sass/CSS. No JSS.
-->
<style lang="scss">
  .class-card-media {
    aspect-ratio: 6.45161290323 / 1;
    background-repeat: no-repeat;
    background-size: cover;
    height: 0;
    padding-top: 56.25%;
    position: relative;
  }

  .class-card-media-gradient {
    background-image: linear-gradient(
      rgba(5, 5, 5, 0.6),
      rgba(216, 216, 216, 0)
    );
    height: 60px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .play-icon {
    align-items: center;
    color: var(--navy);
    display: none;
    justify-content: center;
    left: 50%;
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 40px;
    height: 40px;

    &::after {
      background: var(--white);
      border-radius: 50%;
      content: '';
      position: absolute;
      height: 20px;
      width: 20px;
      z-index: 0;
    }

    .class-card-media:hover & {
      display: flex;
    }
  }
</style>

<!--
	Notice we don't need to declare out properties like style={style}? 
	Svelte affords us the shortcut below. It takes a little getting used
	to (I thought), but once you are used to it, anything else seems odd.
-->
<div class="class-card-media" {style}>
  <slot />
  <div class="class-card-media-gradient" />
  <div class="play-icon">
    <Icon path={mdiPlayCircle} height={40} width={40} z={1} />
  </div>
</div>
