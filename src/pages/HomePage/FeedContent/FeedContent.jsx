import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Typography from '@mui/material/Typography'
import Post from '~/components/Post/Post'
import Stack from '@mui/material/Stack'

function FeedContent({ user }) {

  return (
    <Box sx={{
      width: { sx: '500px', sm: '900px' }
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <AvatarGroup max={ 5 } sx={{ margin: '20px 0 0 0', gap: 5, justifyContent: 'center', '& .MuiAvatar-root': { borderColor: '#c62828', border: '3px solid #ff9800' } }}>
          <Box sx={{ cursor: 'pointer' }}>
            <Avatar alt="Obito" src="https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/ce40366c56de36c44ffdbb0066cdd3cd.jpg?alt=media&token=6af464b1-04af-41b1-86c9-d623532b0aad" />
            <Typography variant='caption'>Obito</Typography>
          </Box>
          <Box sx={{ cursor: 'pointer' }}>
            <Avatar alt="Luffy" src="https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/b33cf5488bac1c04f86df2304d141bba.jpg?alt=media&token=bc36be07-d92e-442b-ad27-79a02c490a01" />
            <Typography variant='caption'>Luffy</Typography>
          </Box>
          <Box sx={{ cursor: 'pointer' }}>
            <Avatar alt="Ronaldo" src="https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/5faa55c4c55c4c51a7a357a39da8f7db.jpg?alt=media&token=d70c4ae5-66e0-4038-8e4e-c6d1634de4a8" />
            <Typography variant='caption'>Ronaldo</Typography>
          </Box>
          <Box sx={{ cursor: 'pointer' }}>
            <Avatar alt="Hacker" src="https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/0da80c00d396748e93fdece8fcadaf74.jpg?alt=media&token=4d4c7a3f-c3cf-4381-9c59-b4b8cda31fc3" />
            <Typography variant='caption'>Master</Typography>
          </Box>
          <Box sx={{ cursor: 'pointer' }}>
            <Avatar alt="KhoaDev" src="https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/c077b0663e82bdd12ce0b0c35327e0d0.jpg?alt=media&token=9f1ec0bc-4c5e-4994-a157-dee9760c2ee7" />
            <Typography variant='caption'>Khoa</Typography>
          </Box>
        </AvatarGroup>
      </Box>
      <Stack
        sx={{ pt: { sx: '0', sm: 5 }, justifyContent: { xs: 'center', md: 'flex-start' } }}
        direction="column"
        alignItems="center"
        spacing={5}
      >
        {
          user?.posts?.map(post =>
            <Post key={post?._id} post={post} user={user} />
          )
        }
      </Stack>
    </Box>
  )
}

export default FeedContent