import { Box, Typography } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'

function ListChat() {
  return (
    <Box sx={{ borderRight: 1, pr: 3, height: '415px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="button">Messeger</Typography>
      </Box>
      <Box
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { border: 'none' },
            '&.Mui-focused fieldset': { border: 'none' }
          },
          mt: 3,
          mb: 3
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
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Chip
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            height: '65px',
            '& .MuiAvatar-root': { width: '50px', height: '50px', ml: 5, mr: 0.25 },
            border: 'none',
            backgroundColor: '#e3f2fd',
            cursor: 'pointer'
          }}
          avatar={<Avatar alt="Natacha" src="https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/ce40366c56de36c44ffdbb0066cdd3cd.jpg?alt=media&token=6af464b1-04af-41b1-86c9-d623532b0aad" />}
          label={<Typography variant="overline">Obito</Typography>}
          variant="outlined"
        />
        <Chip
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            height: '65px',
            '& .MuiAvatar-root': { width: '50px', height: '50px', ml: 5, mr: 0.25 },
            border: 'none',
            backgroundColor: '#e3f2fd',
            cursor: 'pointer'
          }}
          avatar={<Avatar alt="Natacha" src="https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/b33cf5488bac1c04f86df2304d141bba.jpg?alt=media&token=bc36be07-d92e-442b-ad27-79a02c490a01" />}
          label={<Typography variant="overline">Luffy</Typography>}
          variant="outlined"
        />
        <Chip
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            height: '65px',
            '& .MuiAvatar-root': { width: '50px', height: '50px', ml: 5, mr: 0.25 },
            border: 'none',
            backgroundColor: '#e3f2fd',
            cursor: 'pointer'
          }}
          avatar={<Avatar alt="Natacha" src="https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/0da80c00d396748e93fdece8fcadaf74.jpg?alt=media&token=4d4c7a3f-c3cf-4381-9c59-b4b8cda31fc3" />}
          label={<Typography variant="overline">KhoaDev.354</Typography>}
          variant="outlined"
        />
        <Chip
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            height: '65px',
            '& .MuiAvatar-root': { width: '50px', height: '50px', ml: 5, mr: 0.25 },
            border: 'none',
            backgroundColor: '#e3f2fd',
            cursor: 'pointer'
          }}
          avatar={<Avatar alt="Natacha" src="https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/0da80c00d396748e93fdece8fcadaf74.jpg?alt=media&token=4d4c7a3f-c3cf-4381-9c59-b4b8cda31fc3" />}
          label={<Typography variant="overline">Scarlett❥Jh</Typography>}
          variant="outlined"
        />
      </Box>
    </Box>
  )
}

export default ListChat