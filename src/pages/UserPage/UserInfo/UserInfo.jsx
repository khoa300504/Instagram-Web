import UserHeader from '~/components/UserHeader/UserHeader'
import UserPost from '~/components/UserPost/UserPost'
import Box from '@mui/material/Box'
import { mapOrder } from '~/utils/sort'
import { mockData } from '~/apis/mockData'

function UserInfo({ followUnFollow }) {
  const user = mockData?.user
  user.posts = mapOrder(mockData?.user?.posts, mockData?.user?.postOrderIds, mockData?.user?._id)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', gap: 2 }}>
      <UserHeader followUnFollow={followUnFollow}/>
      <UserPost/>
    </Box>
  )
}

export default UserInfo