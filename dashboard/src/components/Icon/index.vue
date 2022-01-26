<template>
  <component :is="name" v-bind="$props" />
</template>

<script>
import Loading from './Loading'
import Copy from './Copy'
import ChevronDown from './ChevronDown'
import ChevronUp from './ChevronUp'

export default {
  components: {
    Loading,
    Copy,
    ChevronDown,
    ChevronUp
  },
  props: {
    name: { type: String, required: true }
  }
}
</script>
