import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import { Typography } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import Button from '@mui/material/Button'
import { useParams } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'
import { useState, useEffect } from 'react'
import { getProfile } from '~/apis'
import CircularProgress from '@mui/material/CircularProgress'

function UserHeader({ followUnFollow }) {
  const [currentUserFollowing, setCurrentUserFollowing] = useState(null)
  const [requestUser, setRequestUser] = useState(null)
  const requestUserId = useParams().id
  const currentUserId = JSON.parse(localStorage.getItem('user-threads'))._id
  useEffect(() => {
    getProfile(requestUserId).then(
      user => {
        setRequestUser(user)
      }
    )
    getProfile(currentUserId).then(
      user => {
        setCurrentUserFollowing(user.following)
      }
    )
  }, [currentUserId, requestUserId])
  useEffect(() => {
    setFollowState(currentUserFollowing?.includes(requestUserId))
  }, [currentUserFollowing, requestUserId])
  const [followState, setFollowState] = useState(currentUserFollowing?.includes(requestUserId))
  const handleFollow = () => {
    setFollowState(!followState)
    followUnFollow(requestUserId)
  }

  if (requestUser === null)
  {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '50px', width: '65%', gap: '200px', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
        <Box>
          { requestUser?.userPic
            ? <Avatar alt="Remy Sharp" sx={{ width: '150px', height: '150px' }} src={requestUser?.userPic} />
            : <Avatar alt="Remy Sharp" sx={{ width: '150px', height: '150px' }} src='' />
          }
        </Box>
        <Box>
          <SettingsIcon sx={{ cursor: 'pointer' }} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
        <Box>
          { currentUserId === requestUserId
            ? <Link as={RouterLink} to={`/update/${currentUserId}`}>
              <Button sx={{ width: '120px' }} variant="contained">Edit Profile</Button>
            </Link>
            : <Button sx={{ width: '120px' }} variant="contained" onClick={handleFollow}>{followState ?'UnFollow' :'Follow'}</Button>
          }
        </Box>
        <Box>
          <Typography sx={{ fontSize: '26px', fontWeight: 'medium' }}>{requestUser?.fullname}</Typography>
          <Typography sx={{ fontSize: '18px', fontWeight: 'medium' }}>{requestUser?.displayName}</Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: '18px' }}>{requestUser?.bio}</Typography>
          <Typography sx={{ fontSize: '14px', fontWeight: 'light', opacity: '0.785' }}>{requestUser?.follower.length} Follower</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default UserHeader