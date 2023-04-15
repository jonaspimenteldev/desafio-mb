// axios.js

import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000'
})

axiosInstance.interceptors.request.use(
  (config) => {
    // Adiciona um token de autenticação à requisição, por exemplo
    // config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    // Faz algo com a resposta, como manipulá-la ou adicioná-la a um cache
    return response
  },
  (error) => {
    // Trata erros, como redirecionar para a página de login se o status for 401
    return Promise.reject(error)
  }
)

export default axiosInstance
