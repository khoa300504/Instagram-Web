import Divider from '@mui/material/Divider'
import AppBar from '~/components/AppBar/AppBar'
import FeedContent from './FeedContent/FeedContent'
import SuggestBar from './SuggestBar/SuggestBar'
import Stack from '@mui/material/Stack'
import TempBar from './TempBar/TempBar'
import { mockData } from '~/apis/mockData'
import { createPost } from '~/apis'
import { toast } from 'react-toastify'

function HomePage() {
  const handleCreatePost = async (postData) => {
    await createPost(postData)
    toast.success('Your post was share successfully!')
  }

  return (
    <Stack sx={{ flexDirection: { xs: 'column-reverse', sm: 'row' } }}
      spacing={2}
    >
      <AppBar handleCreatePost = {handleCreatePost}/>
      <Divider orientation="vertical" variant="middle" flexItem sx={{ display: { xs: 'none', sm: 'flex' } }} />
      <FeedContent user = {mockData?.user}/>
      <SuggestBar/>
      <TempBar/>
    </Stack>
  )
}

export default HomePage