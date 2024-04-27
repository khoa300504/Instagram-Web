import { API_ROOT } from '~/utils/constants.js'
import axios from 'axios'
import { Bounce, toast } from 'react-toastify'

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 422) {
      toast.warning('Missing data or wrong type', {
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Bounce
      })
    }
    if (error.response && error.response.status === 409) {
      toast.warning('User or email already used!', {
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Bounce
      })
    }
  }
)

export const createNewUser = async (userInfo) => {
  const response = await axios.post(`${API_ROOT}/v1/users/signup`, userInfo)
  return response.data
}
