import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import { useEffect, useState } from 'react'
import { getProfile } from '~/apis'
import { toast } from 'react-toastify'

function WaitingChat() {
  const currentUserId = JSON.parse(localStorage.getItem('user-threads'))._id
  const [currentUser, setCurrentUser] = useState()
  useEffect(() => {
    getProfile(currentUserId).then(
      user => setCurrentUser(user)
    )
  }, [currentUserId])

  return (
    <Box sx={{
      width: '625px',
      height: '415px',
      background: 'url("https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/wallpaperflare.com_wallpaper.jpg?alt=media&token=85ae86d4-10c8-4a14-bda0-aebdd1e7bd49")' }}>
      <Box sx={{
        backdropFilter: 'blur(5px)',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 1,
        '& .MuiSvgIcon-root': {
          fontSize: '50px',
          width: '50px'
        } }}>
        <Typography variant='h5' sx={{ color: '#fff' }}>Welcome 👍 {currentUser?.displayName} 😎</Typography>
        <Typography variant='h6' sx={{ color: '#fff' }}>Select a chat to start messaging</Typography>
        <ChatBubbleOutlineIcon sx={{ color: '#fff' }}/>
      </Box>
    </Box>
  )
}

export default WaitingChat