import { toast } from 'react-toastify'
import { sendMessageAPI } from '~/apis'
import useConversation from '~/zustand/useConversation'

export const useSendMessage = () => {
  const { messages, setMessages, selectedConversation } = useConversation()

  const sendMessage = async (message) => {
    try {
      const result = await sendMessageAPI(selectedConversation._id, { message: message })
      setMessages([...messages, result])
    } catch (error) {
      toast.error(error)
    }
  }
  return { sendMessage }
}

export default useSendMessage