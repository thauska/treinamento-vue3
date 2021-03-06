import axios from 'axios'
import FeedbacksService from './feedbacks'

type tApiEnvs = {
  [key: string]: string
}

const API_ENVS: tApiEnvs = {
  production: 'https://feedbacker-backend.thayanacmamore.dev/',
  development: '',
  local: 'http://localhost:3000'
}

const httpClient = axios.create({
  baseURL: API_ENVS[process.env.NODE_ENV] || API_ENVS.local
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
  feedbacks: FeedbacksService(httpClient)
}
