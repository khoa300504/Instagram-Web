import AppBar from '~/components/AppBar/AppBar'
import Box from '@mui/material/Box'
import MainChat from './MainChat/MainChat'
import ListConversations from './ListConversations/ListConversations'
import useConversation from '~/zustand/useConversation'
import WaitingChat from './WaitingChat/WaitingChat'

function ChatPage() {
  const { selectedConversation } = useConversation()

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      width: '100vw'
    }}>
      <AppBar />
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        border: 1
      }}>
        <ListConversations />
        {selectedConversation
          ? <MainChat/>
          : <WaitingChat/>
        }
      </Box>
    </Box>
  )
}

export default ChatPage