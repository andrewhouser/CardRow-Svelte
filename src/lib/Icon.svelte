<script lang="ts">
  export let fill: string = 'inherit';
  export let height: number = null;
  export let path: string;
  export let stroke: string = 'none';
  export let width: number = 24;
  export let z: number = 1;

  if (!height) height = width;

  const viewBox = '0 0 24 24';
</script>

<svg {fill} {height} {stroke} {width} {viewBox} style="z-index: {z}">
  <path d={path} />
</svg>
