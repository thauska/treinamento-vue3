<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 17 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      transform="matrix(-1,0,0,-1,17,10)"
      d="M 2 0 L 8.5 6.2 L 15 0 L 17 1.9 L 8.5 10 L 0 1.9 L 2 0 Z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  props: {
    size: { type: [String, Number], default: 22 },
    color: { type: String, default: 'white' }
  }
}
</script>
