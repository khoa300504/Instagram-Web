import React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import { Typography } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
// import Badge from '@mui/material/Badge'

function UserHeader({ user }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '50px', width: '65%', gap: '200px', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
        <Box>
          { user?.avtImg
            ? <Avatar alt="Remy Sharp" sx={{ width: '150px', height: '150px' }} src={user?.avtImg} />
            : <Avatar alt="Remy Sharp" sx={{ width: '150px', height: '150px' }} src='' />
          }
        </Box>
        <Box>
          <SettingsIcon sx={{ cursor: 'pointer' }} />
        </Box>
      </Box>
      <Box sx={{ marginTop: '45px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
        <Box>
          <Typography sx={{ fontSize: '26px', fontWeight: 'medium' }}>{user?.userName}</Typography>
          <Typography sx={{ fontSize: '18px', fontWeight: 'medium' }}>{user?.instaId}</Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: '18px' }}>{user?.title}</Typography>
          <Typography sx={{ fontSize: '14px', fontWeight: 'light', opacity: '0.785' }}>{user?.followNum} Follower</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default UserHeader