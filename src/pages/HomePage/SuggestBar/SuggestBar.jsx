import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import { Avatar, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { followUnfollow, getProfile, getSuggestUser } from '~/apis'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'

function SuggestBar() {
  const currentUserId = JSON.parse(localStorage.getItem('user-threads'))._id
  const [listSuggestUser, setListSuggestUser] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    getProfile(currentUserId).then(
      user => {
        setCurrentUser(user)
      })
  }, [currentUserId])
  useEffect(() => {
    getSuggestUser().then(
      user => {
        setListSuggestUser(user)
      }
    )
  }, [])

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
        }} icon={<Avatar src={currentUser?.userPic} />} label={currentUser?.displayName} />
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
      {listSuggestUser.map(user => (
        <Box
          key={user._id}
          sx={{
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
          }}
        >
          <Link underline="none" key={user._id} as={RouterLink} to={`/profile/${user?._id}`}>
            <Chip
              sx={{
                backgroundColor: 'transparent',
                cursor: 'pointer',
                '& .MuiChip-label': {
                  fontWeight: 'medium'
                }
              }}
              icon={<Avatar src={user?.userPic} />}
              label={user?.displayName}
            /></Link>
          <Typography onClick={async () => { }} variant='caption' sx={{ cursor: 'pointer', color: '#03a9f4', fontWeight: 'medium' }}>
            Follow
          </Typography>
        </Box>
      ))}
    </Box>
  )
}

export default SuggestBar