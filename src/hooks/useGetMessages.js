import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getMessagesAPI } from '~/apis'
import useConversation from '~/zustand/useConversation'

const useGetMessages = () => {
  const [loading, setLoading] = useState(false)
  const { messages, setMessages, selectedConversation } = useConversation()

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true)
      try {
        const result = await getMessagesAPI(selectedConversation._id)
        setMessages(result)
      } catch (error) {
        toast.error(error)
      } finally {
        setLoading(false)
      }
    }

    if (selectedConversation?._id) getMessages()
  }, [selectedConversation._id, setMessages])

  return { messages, loading }
}

export default useGetMessages
