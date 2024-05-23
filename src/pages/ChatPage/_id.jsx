import AppBar from '~/components/AppBar/AppBar'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import ListChat from './ListChat/ListChat'
import MainChat from './MainChat/MainChat'

function ChatPage() {
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
        <ListChat />
        <MainChat />
      </Box>
    </Box>
  )
}

export default ChatPage