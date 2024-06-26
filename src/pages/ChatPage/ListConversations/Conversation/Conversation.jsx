import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { userSocketContext } from '~/context/SocketContext'
import useConversation from '~/zustand/useConversation'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'

function Conversation({ conversation }) {
  const { selectedConversation, setSelectedConversation, setMessages } = useConversation()
  const isSelected = selectedConversation?._id === conversation._id
  const { onlineUsers } = userSocketContext()
  console.log('🚀 ~ Conversation ~ onlineUsers:', onlineUsers)
  const isOnline = onlineUsers.includes(conversation._id)

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      gap: 3,
      backgroundColor: isSelected ? '#2196f3' : '#e0e0e0',
      '&:hover': { backgroundColor: '#90caf9 !important' },
      p: 1,
      borderRadius: '10px' }}
    onClick={() => {
      if (selectedConversation?._id !== conversation?._id)
      {
        setSelectedConversation(conversation)
        setMessages([])
      }
    }}>
      <Badge color="primary" variant={isOnline ?'dot' :''}>
        <Avatar src={conversation?.userPic}/>
      </Badge>
      <Typography>{conversation?.displayName}</Typography>
    </Box>
    // <Chip
    //   sx={{
    //     '&:hover': { backgroundColor: '#90caf9 !important' },
    //     display: 'flex',
    //     justifyContent: 'flex-start',
    //     minHeight: '65px',
    //     width: '230px',
    //     '& .MuiAvatar-root': { width: '50px', height: '50px', ml: 5, mr: 0.25 },
    //     border: 'none',
    //     backgroundColor: isSelected ? '#2196f3' : '#e0e0e0',
    //     cursor: 'pointer',
    //     mr: '1'
    //   }}
    //   onClick={() => {
    //     if (selectedConversation?._id !== conversation?._id)
    //     {
    //       setSelectedConversation(conversation)
    //       setMessages([])
    //     }
    //   }}
    //   avatar={<Avatar alt="Natacha" src={conversation?.userPic} />}
    //   label={<Typography variant="subtitle2">{conversation?.displayName}</Typography>}
    //   variant="outlined"
    // />
  )
}

export default Conversation
