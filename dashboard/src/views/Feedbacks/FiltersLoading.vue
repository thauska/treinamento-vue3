<template>
  <content-loader
    class="flex flex-col rounded"
    width="100%"
    height="200px"
  >
    <content-loader
      class="mt-3 rounded"
      width="90%"
      height="30px"
      animation-duration="2s"
    />
    <content-loader
      class="mt-3 rounded"
      width="80%"
      height="30px"
      animation-duration="2.2s"
    />
    <content-loader
      class="mt-3 rounded"
      width="70%"
      height="30px"
      animation-duration="2.3s"
    />
    <content-loader
      class="mt-3 rounded"
      width="70%"
      height="30px"
      animation-duration="2.5s"
    />
  </content-loader>
</template>

<script>
import ContentLoader from '@/components/ContentLoader'

export default {
  components: {
    ContentLoader
  }
}
</script>
