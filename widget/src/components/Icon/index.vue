<template>
  <component :is="name" v-bind="$props" />
</template>

<script>
import Loading from './Loading.vue'
import Copy from './Copy.vue'
import ChevronDown from './ChevronDown.vue'
import ChevronUp from './ChevronUp.vue'
import Chat from './Chat.vue'
import Close from './Close.vue'
import Check from './Check.vue'
import Attention from './Attention.vue'
import ArrowRight from './ArrowRight.vue'

export default {
  components: {
    Loading,
    Copy,
    ChevronDown,
    ChevronUp,
    Chat,
    Close,
    Check,
    Attention,
    ArrowRight
  },
  props: {
    name: { type: String, required: true }
  }
}
</script>
