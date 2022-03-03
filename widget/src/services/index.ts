import axios from 'axios'

const API_ENVS = {
  production: 'https://backend-treinamento-vue3-thauska.vercel.app/',
  development: '',
  local: 'http://localhost:3000'
}

const httpClient = axios.create({
  baseURL: 'http://localhost:3000'
})

httpClient.interceptors.response.use((response) => {
  return response
}, (error) => {
  const canThrowAnError = error.request.status === 0 ||
    error.request.status === 500

  if (canThrowAnError) {
    throw new Error(error.message)
  }

  return error
})

export default {
}
