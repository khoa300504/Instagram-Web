import React from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Post from '~/components/Post/Post'


function UserPost({ user }) {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '60%', alignItems: 'center' }}>
      <Divider orientation="horizontal" flexItem variant='middle' />
      {
        user?.posts?.map(post =>
          <Post key={post?._id} post={post} user={user} />
        )
      }
    </Box>
  )
}

export default UserPost