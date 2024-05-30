import { useEffect, useState } from 'react'
import { getUsers } from '~/apis'

const useGetConversation = () => {
  const [loading, setLoading] = useState(false)
  const [conversations, setConversations] = useState([])

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true)
      try {
        const data = await getUsers()
        setConversations(data)
      } finally {
        setLoading(false)
      }
    }
    getConversations()
  }, [])
  return { loading, conversations }
}

export default useGetConversation