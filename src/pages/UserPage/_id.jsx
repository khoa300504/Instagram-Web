import Box from '@mui/material/Box'
import React from 'react'
import AppBar from '~/components/AppBar/AppBar'
import UserInfo from './UserInfo/UserInfo'
import Divider from '@mui/material/Divider'
import { mockData } from '~/apis/mockData'

function UserPage() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row'
    }}>
      <AppBar/>
      <Divider orientation="vertical" variant="middle" flexItem />
      <UserInfo user = {mockData?.user} />
    </Box>
  )
}

export default UserPage