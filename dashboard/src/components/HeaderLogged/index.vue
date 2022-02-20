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
          id="logout-button"
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
import { cleanCurrentUser } from '@/store/user'

export default {
  setup () {
    const router = useRouter()
    const store = useStore('User')

    const logoutlabel = computed(() => {
      if (!store.currentUser.name) {
        return '...'
      }

      return `${store.currentUser.name} (sair)`
    })

    function handleLogout () {
      window.localStorage.removeItem('token')
      cleanCurrentUser()
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
