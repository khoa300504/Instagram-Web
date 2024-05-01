import { API_ROOT } from '~/utils/constants.js'
import axios from 'axios'
import { toast } from 'react-toastify'

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const errRes = error.response.data.message
    if (error.response) {
      toast.warning(errRes)
    }
  }
)

export const createNewUser = async (userInfo) => {
  const response = await axios.post(`${API_ROOT}/v1/users/signup`, userInfo)
  return response.data
}

export const logout = async () => {
  const response = await axios.post(`${API_ROOT}/v1/users/logout`)
  return response.data
}

export const login = async (userInfo) => {
  const response = await axios.post(`${API_ROOT}/v1/users/signin`, userInfo)
  return response.data
}

