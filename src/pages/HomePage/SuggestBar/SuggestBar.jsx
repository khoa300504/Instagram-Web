import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import { Avatar, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { getFeed, getProfile } from '~/apis'

function SuggestBar() {
  const currentUserId = JSON.parse(localStorage.getItem('user-threads'))._id
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    getProfile(currentUserId).then(
      user => {
        setCurrentUser(user)
      })
  }, [currentUserId])

  return (
    <Box sx={{
      display: { md: 'flex', xs: 'none' },
      flexDirection: 'column',
      pt: '30px',
      gap: 3
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
        alignItems: 'center',
        '& .MuiTypography-root': {
          '&:hover': {
            color: '#000'
          }
        }
      }}>
        <Chip sx={{
          backgroundColor: 'transparent',
          cursor: 'pointer',
          '& .MuiChip-label': {
            fontWeight: 'medium'
          }
        }} icon={<Avatar src={currentUser?.userPic}/>} label={currentUser?.displayName} />
        <Typography variant='caption' sx={{ cursor: 'pointer', color: '#03a9f4', fontWeight: 'medium' }}>Switch</Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
        alignItems: 'center',
        '& .MuiTypography-root': {
          '&:hover': {
            color: '#000'
          }
        }
      }}>
        <Typography sx={{ opacity: '0.7' }}>Suggested Users</Typography>
        <Typography variant='caption' sx={{ cursor: 'pointer', color: '#03a9f4', fontWeight: 'medium' }}>See all</Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
        alignItems: 'center',
        '& .MuiTypography-root': {
          '&:hover': {
            color: '#000'
          }
        }
      }}>
        <Chip sx={{
          backgroundColor: 'transparent',
          cursor: 'pointer',
          '& .MuiChip-label': {
            fontWeight: 'medium'
          }
        }} icon={<Avatar src='https://i.pinimg.com/564x/96/71/aa/9671aac619fa889884a4a635e1169e58.jpg'/>} label="Naruto" />
        <Typography variant='caption' sx={{ cursor: 'pointer', color: '#03a9f4', fontWeight: 'medium' }}>Follow</Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
        alignItems: 'center',
        '& .MuiTypography-root': {
          '&:hover': {
            color: '#000'
          }
        }
      }}>
        <Chip sx={{
          backgroundColor: 'transparent',
          cursor: 'pointer',
          '& .MuiChip-label': {
            fontWeight: 'medium'
          }
        }} icon={<Avatar src='https://i.pinimg.com/736x/ac/14/23/ac14233ce46877abb82fd66efae898f5.jpg'/>} label="Nakroth" />
        <Typography variant='caption' sx={{ cursor: 'pointer', color: '#03a9f4', fontWeight: 'medium' }}>Follow</Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
        alignItems: 'center',
        '& .MuiTypography-root': {
          '&:hover': {
            color: '#000'
          }
        }
      }}>
        <Chip sx={{
          backgroundColor: 'transparent',
          cursor: 'pointer',
          '& .MuiChip-label': {
            fontWeight: 'medium'
          }
        }} icon={<Avatar src='https://i.pinimg.com/564x/70/76/9a/70769a45f3804a802965fb0eee0afb2c.jpg'/>} label="Conan" />
        <Typography variant='caption' sx={{ cursor: 'pointer', color: '#03a9f4', fontWeight: 'medium' }}>Follow</Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
        alignItems: 'center',
        '& .MuiTypography-root': {
          '&:hover': {
            color: '#000'
          }
        }
      }}>
        <Chip sx={{
          backgroundColor: 'transparent',
          cursor: 'pointer',
          '& .MuiChip-label': {
            fontWeight: 'medium'
          }
        }} icon={<Avatar src='https://i.pinimg.com/736x/27/0e/a7/270ea788ff230e0afa2c8e0fa1d0611d.jpg'/>} label="Itachi" />
        <Typography variant='caption' sx={{ cursor: 'pointer', color: '#03a9f4', fontWeight: 'medium' }}>Follow</Typography>
      </Box>
    </Box>
  )
}

export default SuggestBar