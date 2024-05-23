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
import Chip from '@mui/material/Chip'

function MainChat() {
  const currentUser = 1

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '415px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 50, boxShadow: 3 }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          '& .MuiAvatar-root': { width: '50px', height: '50px' },
          gap: 1
        }}>
          <Avatar sx={{ cursor: 'pointer' }} alt="Remy Sharp" src="https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/ce40366c56de36c44ffdbb0066cdd3cd.jpg?alt=media&token=6af464b1-04af-41b1-86c9-d623532b0aad" />
          <Typography sx={{ cursor: 'pointer' }} variant="overline" >Obito</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 3 }}>
          <CallIcon sx={{ color: '#1e88e5', cursor: 'pointer' }} />
          <VideocamIcon sx={{ color: '#1e88e5', cursor: 'pointer' }} />
          <MoreVertIcon sx={{ color: '#1e88e5', cursor: 'pointer' }} />
        </Box>
      </Box>
      <Box sx={{ overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 5, pl: 1, pr: 1 }}>
        <Box sx={{
          '& .MuiChip-root': {
            border: 'none',
            height: '50px'
          },
          '& .MuiChip-label': {
            p: '10px 15px 10px 10px',
            borderRadius: '20px'
          },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}>
          <Chip
            sx={{ maxWidth: '450px' }}
            avatar={<Avatar alt="Natacha" src="https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/ce40366c56de36c44ffdbb0066cdd3cd.jpg?alt=media&token=6af464b1-04af-41b1-86c9-d623532b0aad" />}
            label={<Typography
              variant='caption'
              sx={{ color: '#000', backgroundColor: '#eeeeee', borderRadius: '20px', p: '10px 15px 10px 10px' }}
            >Hello Fen</Typography>}
            variant="outlined"
          />
          <Chip
            sx={{ maxWidth: '450px', height: '150px' }}
            avatar={<Avatar alt="Natacha" src="https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/ce40366c56de36c44ffdbb0066cdd3cd.jpg?alt=media&token=6af464b1-04af-41b1-86c9-d623532b0aad" />}
            label={<Typography
              variant='caption'
              sx={{ color: '#000', backgroundColor: '#eeeeee', borderRadius: '20px', p: '10px 15px 10px 10px' }}
            >Hello Fen</Typography>}
            variant="outlined"
          />
          <Chip
            sx={{ maxWidth: '450px', height: '150px' }}
            avatar={<Avatar alt="Natacha" src="https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/ce40366c56de36c44ffdbb0066cdd3cd.jpg?alt=media&token=6af464b1-04af-41b1-86c9-d623532b0aad" />}
            label={<Typography
              variant='caption'
              sx={{ color: '#000', backgroundColor: '#eeeeee', borderRadius: '20px', p: '10px 15px 10px 10px' }}
            >Hello Fen</Typography>}
            variant="outlined"
          />
          <Chip
            sx={{ maxWidth: '450px', height: '150px' }}
            avatar={<Avatar alt="Natacha" src="https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/ce40366c56de36c44ffdbb0066cdd3cd.jpg?alt=media&token=6af464b1-04af-41b1-86c9-d623532b0aad" />}
            label={<Typography
              variant='caption'
              sx={{ color: '#000', backgroundColor: '#eeeeee', borderRadius: '20px', p: '10px 15px 10px 10px' }}
            >Hello Fen</Typography>}
            variant="outlined"
          />
        </Box>
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
        <InsertPhotoIcon sx={{ ml: 3, cursor: 'pointer' }} />
        <TextField
          placeholder="Aa"
          id="input-with-icon-textfield"
          sx={{ borderRadius: '25px', backgroundColor: '#f5f5f5', width: '500px' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SendIcon sx={{ cursor: 'pointer' }} />
              </InputAdornment>
            )
          }}
        />
        <ThumbUpIcon sx={{ mr: 3, cursor: 'pointer' }} />
      </Box>
    </Box>
  )
}

export default MainChat