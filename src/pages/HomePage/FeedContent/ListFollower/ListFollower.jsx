import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

function ListFollower() {
  return (
    <Box sx={{ cursor: 'pointer' }}>
      <Avatar alt="Obito" src="https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/ce40366c56de36c44ffdbb0066cdd3cd.jpg?alt=media&token=6af464b1-04af-41b1-86c9-d623532b0aad" />
      <Typography variant='caption'>Obito</Typography>
    </Box>
  )
}

export default ListFollower