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

axios.defaults.withCredentials = true

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

export const getProfile = async (userId) => {
  const response = await axios.get(`${API_ROOT}/v1/users/profile/${userId}`)
  return response.data
}

export const updateProfile = async (updateData, userId) => {
  const response = await axios.put(`${API_ROOT}/v1/users/update/${userId}`, updateData)
  return response.data.message
}

export const followUnfollow = async (userId) => {
  const response = await axios.put(`${API_ROOT}/v1/users/follow/${userId}`)
  return response.data.message
}

export const getFeed = async () => {
  const response = await axios.get(`${API_ROOT}/v1/users/feed`)
  return response.data
}

export const getUsers = async () => {
  const response = await axios.get(`${API_ROOT}/v1/users/`)
  return response.data
}

export const getSuggestUser = async () => {
  const response = await axios.get(`${API_ROOT}/v1/users/suggest`)
  return response.data
}

export const createPost = async (postData) => {
  const response = await axios.post(`${API_ROOT}/v1/posts/create`, postData)
  return response.data
}

export const getUserPost = async (userId) => {
  const response = await axios.get(`${API_ROOT}/v1/posts/userpost/${userId}`)
  return response.data
}

export const likeUnlike = async (postId) => {
  const response = await axios.put(`${API_ROOT}/v1/posts/like/${postId}`)
  return response.data
}

export const sendMessageAPI = async (userId, messageData) => {
  const response = await axios.post(`${API_ROOT}/v1/messages/send/${userId}`, messageData)
  return response.data
}

export const getMessagesAPI = async (userId) => {
  const response = await axios.get(`${API_ROOT}/v1/messages/${userId}`)
  return response.data
}
