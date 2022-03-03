<template>
  <component :is="name" v-bind="$props" />
</template>

<script>
import Loading from './Loading.vue'
import Copy from './Copy.vue'
import ChevronDown from './ChevronDown.vue'
import ChevronUp from './ChevronUp.vue'
import Chat from './Chat.vue'

export default {
  components: {
    Loading,
    Copy,
    ChevronDown,
    ChevronUp,
    Chat
  },
  props: {
    name: { type: String, required: true }
  }
}
</script>
