<template>
  <div class="flex flex-col items-center justify-between w-full my-5">
    <icon
      name="check"
      :color="palette.success"
      size="70" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '../Icon/index.vue'
import palette from '../../../palette.js'
import { resetStore } from '@/store'

interface SetupReturn {
  goBack(): void;
  palette: Record<string, string>;
}

export default defineComponent({
  components: { Icon },
  setup (): SetupReturn {
    function goBack (): void {
      resetStore()
    }
    return {
      goBack,
      palette: palette.brand
    }
  }

})
</script>
