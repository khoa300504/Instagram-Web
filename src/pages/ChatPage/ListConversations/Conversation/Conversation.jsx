import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import useConversation from '~/zustand/useConversation'

function Conversation({ conversation }) {
  const { selectedConversation, setSelectedConversation, setMessages } = useConversation()
  const isSelected = selectedConversation?._id === conversation._id

  return (
    <Chip
      sx={{
        '&:hover': { backgroundColor: '#90caf9 !important' },
        display: 'flex',
        justifyContent: 'flex-start',
        minHeight: '65px',
        width: '230px',
        '& .MuiAvatar-root': { width: '50px', height: '50px', ml: 5, mr: 0.25 },
        border: 'none',
        backgroundColor: isSelected ? '#2196f3' : '#e0e0e0',
        cursor: 'pointer',
        mr: '1'
      }}
      onClick={() => {
        if (selectedConversation?._id !== conversation?._id)
        {
          setSelectedConversation(conversation)
          setMessages([])
        }
      }}
      avatar={<Avatar alt="Natacha" src={conversation?.userPic} />}
      label={<Typography variant="subtitle2">{conversation?.displayName}</Typography>}
      variant="outlined"
    />
  )
}

export default Conversation
