<template>
  <div class="flex items-center justify-between w-4/5 max-w-6xl py-10">
    <div class="w-28 lg:w-36">
      <img class="w-full" src="@/assets/images/logo_white.png" alt="logo">
    </div>
    <div class="flex">
      <ul class="flex list-none">
        <li
          @click="router.push({ name: 'Credentials' })"
          class="px-6 py-2 font-bold text-white rounded-full cursor-pointer focus:outline-none"
        >
          Credenciais
        </li>
        <li
          @click="router.push({ name: 'Feedbacks' })"
          class="px-6 py-2 font-bold text-white rounded-full cursor-pointer focus:outline-none"
        >
          Feedbacks
        </li>
        <li
          @click="handleLogout"
          class="px-6 py-2 ml-2 font-bold bg-white rounded-full text-brand-main text-center cursor-pointer focus:outline-none"
        >
          {{ logoutlabel }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import useStore from '@/hooks/useStore'

export default {
  setup () {
    const router = useRouter()
    const store = useStore('User')

    const logoutlabel = computed(() => {
      const nome = store.currentUser.name

      if (!nome) {
        return '...'
      }

      const primeiroNome = nome.substring(0, nome.indexOf(' '))

      return `${primeiroNome} (sair)`
    })

    function handleLogout () {
      window.localStorage.removeItem('token')
      router.push({ name: 'Home' })
    }

    return {
      router,
      logoutlabel,
      handleLogout
    }
  }
}
</script>

<style>

</style>
