import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProfile, getUserPost } from '~/apis'
import Post from '~/components/Post/Post'


function UserPost() {
  const currentUserId = useParams().id
  const [currentUser, setCurrentUser] = useState(null)
  const [listPost, setListPost] = useState([])
  useEffect(() => {
    getProfile(currentUserId).then(
      user => {
        setCurrentUser(user)
      })
  }, [currentUserId])
  useEffect(() => {
    getUserPost(currentUserId)
      .then(feed => {
        setListPost(feed)
      }
      )
  }, [currentUserId])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '65%', alignItems: 'center' }}>
      <Divider orientation="horizontal" flexItem variant='middle' />
      {
        listPost?.map(post =>
          <Post key={post?._id} post={post} userPost={currentUser} currentFile={'userPost'} />
        )
      }
    </Box>
  )
}

export default UserPost