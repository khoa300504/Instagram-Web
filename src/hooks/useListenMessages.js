import { useEffect } from 'react'
import { userSocketContext } from '~/context/SocketContext'
import useConversation from '~/zustand/useConversation'
import receiveMessageSound from '~/assets/sounds/receiveMessageSound.mp3'

const useListenMessages = () => {
  const { socket } = userSocketContext()
  const { messages, setMessages } = useConversation()
  useEffect(() => {
    socket.on('newMessage', newMessage => {
      const sound = new Audio(receiveMessageSound)
      sound.play()
      setMessages([...messages, newMessage])
    })

    return () => socket?.off('newMessage')
  }, [messages, setMessages, socket])
}

export default useListenMessages