import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Post from '~/components/Post/Post'


function UserPost({ user }) {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '65%', alignItems: 'center' }}>
      <Divider orientation="horizontal" flexItem variant='middle' />
      {
        user?.posts?.map(post =>
          <Post key={post?._id} post={post} user={user} currentFile={'userPost'} />
        )
      }
    </Box>
  )
}

export default UserPost