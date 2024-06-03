import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import useGetConversation from '~/hooks/useGetConversation'
import Conversation from './Conversation/Conversation'
import CircularProgress from '@mui/material/CircularProgress'

function ListConversations() {
  const { loading, conversations } = useGetConversation()

  return (
    <Box sx={{ pr: 1, pl: 1, height: '415px', backdropFilter: 'blur(5px)' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="button" sx={{ color: '#2196f3', pt: 1.5 }}>Messeger</Typography>
      </Box>
      <Box
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { border: 'none' },
            '&.Mui-focused fieldset': { border: 'none' }
          },
          mb: 3,
          borderBottom: 1,
          pt: 1,
          pb: 1,
          borderColor: '#fff'
        }}>
        <TextField
          placeholder="Tìm kiếm đoạn chat"
          id="input-with-icon-textfield"
          sx={{ borderRadius: '25px', backgroundColor: '#f5f5f5' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, overflow: 'auto', height: '285px', pt: 1 }}>
        {
          loading
            ? <CircularProgress/>
            : conversations.map(conversation => (
              <Conversation key={conversation?._id} conversation={conversation} />
            ))
        }
      </Box>
    </Box>
  )
}

export default ListConversations