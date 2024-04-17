import React from 'react'
import UserHeader from '~/components/UserHeader/UserHeader'
import UserPost from '~/components/UserPost/UserPost'
import Box from '@mui/material/Box'
import { mapOrder } from '~/util/sort'

function UserInfo({ user }) {
  user.posts = mapOrder(user?.posts, user?.postOrderIds, user?._id)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', gap: 2 }}>
      <UserHeader user = {user} />
      <UserPost user = {user} />
    </Box>
  )
}

export default UserInfo