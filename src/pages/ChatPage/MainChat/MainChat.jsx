import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CallIcon from '@mui/icons-material/Call'
import VideocamIcon from '@mui/icons-material/Videocam'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import SendIcon from '@mui/icons-material/Send'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import useConversation from '~/zustand/useConversation'
import { useEffect, useRef, useState } from 'react'
import Message from './Message/Message'
import useGetMessages from '~/hooks/useGetMessages'
import useSendMessage from '~/hooks/useSendMessage'

function MainChat() {
  const { selectedConversation, setMessages } = useConversation()
  const { messages } = useGetMessages()
  const { sendMessage } = useSendMessage()
  const [message, setMessage] = useState('')
  const handleSendMessage = async () => {
    await sendMessage(message)
    setMessage('')
  }
  const lastMessageRef = useRef()
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }, [messages, setMessages])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '415px',
        backdropFilter: 'blur(5px)',
        border: 1,
        width: '625px'
      }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        boxShadow: 3,
        backgroundColor: '#fff',
        zIndex: '1000' }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: '50px',
          '& .MuiAvatar-root': { width: '35px', height: '35px', ml: 1 },
          gap: 1
        }}>
          <Avatar sx={{ cursor: 'pointer' }} alt="Remy Sharp" src={selectedConversation?.userPic} />
          <Typography sx={{ cursor: 'pointer', minWidth: '150px' }} variant="overline" >{selectedConversation?.displayName}</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 3 }}>
          <CallIcon sx={{ color: '#1e88e5', cursor: 'pointer' }} />
          <VideocamIcon sx={{ color: '#1e88e5', cursor: 'pointer' }} />
          <MoreVertIcon sx={{ color: '#1e88e5', cursor: 'pointer' }} />
        </Box>
      </Box>
      <Box sx={{ overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 1, pl: 1, pr: 1 }}>
        {messages.map(m => (
          <Box key={m?._id} ref={lastMessageRef}>
            <Message data={m}/>
          </Box>
        ))}
      </Box>
      <Box sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': { border: 'none' },
          '&.Mui-focused fieldset': { border: 'none' }
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        pt: 3
      }}>
        <InsertPhotoIcon sx={{ ml: 3, cursor: 'pointer', color: '#bdbdbd' }} />
        <TextField
          placeholder="Aa"
          id="input-with-icon-textfield"
          sx={{ borderRadius: '25px', backgroundColor: '#f5f5f5', width: '500px', mb: 1 }}
          onChange={e => setMessage(e.target.value)}
          value={message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {message && <SendIcon sx={{ cursor: 'pointer' }} onClick={handleSendMessage}/>}
              </InputAdornment>
            )
          }}
        />
        <ThumbUpIcon sx={{ mr: 3, cursor: 'pointer', color: '#64b5f6' }}/>
      </Box>
    </Box>
  )
}

export default MainChat
