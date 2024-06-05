import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Typography from '@mui/material/Typography'
import Post from '~/components/Post/Post'
import Stack from '@mui/material/Stack'
import { useEffect, useState } from 'react'
import { getFeed, getProfile } from '~/apis'
import CircularProgress from '@mui/material/CircularProgress'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'
import Skeleton from '@mui/material/Skeleton'

function FeedContent() {
  const currentUserId = JSON.parse(localStorage.getItem('user-threads'))._id
  const [currentFollowingIds, setCurrentFollowingIds] = useState(null)
  const [followingUsers, setFollowingUsers] = useState([])
  const [posts, setPosts] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  //Lay thong tin nguoi dung hien tai
  useEffect(() => {
    getProfile(currentUserId).then(
      user => {
        setCurrentFollowingIds(user.following)
      })
      .finally(() => setIsLoading(true))
  }, [currentUserId])

  //lay profile cua following user
  useEffect(() => {
    if (currentFollowingIds) {
      Promise.all(
        currentFollowingIds.map(id => getProfile(id))
      ).then(users => {
        setFollowingUsers(users)
      }).finally(() => {
        setIsLoading(true)
      })
    }
  }, [currentFollowingIds])

  //lay bai viet cua nguoi do
  useEffect(() => {
    if (currentFollowingIds) {
      getFeed().then(feed => {
        setPosts(feed)
      }).finally(() => setIsLoading(false))
    }
  }, [currentFollowingIds])

  return (
    <Box sx={{
      width: { sx: '500px', sm: '900px' },
      marginTop: '0 !important'
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <AvatarGroup max={ 5 } sx={{ margin: '20px 0 0 0', gap: 5, justifyContent: 'center', '& .MuiAvatar-root': { borderColor: '#c62828', border: '3px solid #ff9800' } }}>
          {isLoading ? (
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          ) : (
            followingUsers && followingUsers?.map(user => (
              <Link underline="none" key={user._id} as={RouterLink} to={`/profile/${user._id}`}>
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  <Avatar alt={user.name} src={user.userPic} />
                  <Typography sx={{ color: '#2c3e50' }} variant='caption'>KhoaPro</Typography>
                </Box>
              </Link>
            ))
          )}
        </AvatarGroup>
      </Box>
      <Stack
        sx={{ pt: { sx: '0', sm: 5 }, justifyContent: { xs: 'center', md: 'flex-start' } }}
        direction="column"
        alignItems="center"
      >
        {!isLoading && posts.length === 0 && <Typography>Follow someone to get feed</Typography>}
        {isLoading &&
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Skeleton variant="circular">
              <Avatar />
            </Skeleton>
            <Skeleton variant="rectangular" sx={{ mb: 2, mt: 2 }} width='70%' height={60} />
            <Skeleton variant="rounded" width='70%' height={60} />
          </Box>}
        { posts &&
          posts?.map(post => {
            const userPost = followingUsers.find(user => user._id === post.userId)
            if (userPost)
            {
              return (
                <Post key={post._id} post={post} userPost={userPost} currentFile={'feed'}/>
              )}
          })
        }
      </Stack>
    </Box>
  )
}

export default FeedContent