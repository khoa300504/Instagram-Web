import { createContext, useContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import userAtom from '~/atoms/userAtom'
import { useRecoilValue } from 'recoil'
import { API_ROOT } from '~/utils/constants'

const SocketContext = createContext()

export const userSocketContext = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useContext(SocketContext)
}

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null)
  const [onlineUsers, setOnlineUsers] = useState([])
  const user = useRecoilValue(userAtom)

  useEffect(() => {
    if (user) {
      const socket = io(API_ROOT, {
        query: {
          userId: user._id
        }
      })
      setSocket(socket)

      socket.on('getOnlineUsers', users => {setOnlineUsers(users)})

      return () => socket.close()
    }
    else {
      // eslint-disable-next-line no-lonely-if
      if (socket) {
        socket.close()
        setSocket(null)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>{ children }</SocketContext.Provider>
  )
}