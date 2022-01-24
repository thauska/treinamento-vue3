<template>
  <h1>Lifecycle Hooks</h1>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
export default {
    setup() {
        onMounted(() => {
            console.log('Foi montado composition API');
        })
    }
}

/* export default {
    mounted() {
        console.log('Foi montado options API');
    }
} */
</script>

<style>

</style>