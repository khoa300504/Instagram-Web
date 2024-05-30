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

function FeedContent() {
  const currentUserId = JSON.parse(localStorage.getItem('user-threads'))._id
  const [currentFollowingId, setCurrentFollowingId] = useState(null)
  const [followingUserList, setFollowingUserList] = useState([])
  const [listPost, setListPost] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    getProfile(currentUserId).then(
      user => {
        setCurrentFollowingId(user.following)
      })
      .finally(() => setIsLoading(false))
  }, [currentUserId])
  useEffect(() => {
    if (currentFollowingId) {
      Promise.all(
        currentFollowingId.map(id => getProfile(id))
      ).then(users => {
        setFollowingUserList(users)
      }).finally(() => {
        setIsLoading(false)
      })
    }
  }, [currentFollowingId])

  useEffect(() => {
    if (currentFollowingId) {
      getFeed().then(feed => {
        setListPost(feed)
      })
    }
  }, [currentFollowingId])

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
            followingUserList && followingUserList?.map(user => (
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
        {listPost.length !== 0
          ? listPost?.map(post => {
            const userPost = followingUserList.find(user => user._id === post.userId)
            if (userPost)
            {
              return (
                <Post key={post._id} post={post} userPost={userPost} currentFile={'feed'}/>
              )}
          })
          : <Typography>Follow someone to get feed</Typography>
        }
      </Stack>
    </Box>
  )
}

export default FeedContent