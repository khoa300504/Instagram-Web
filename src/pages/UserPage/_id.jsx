import Box from '@mui/material/Box'
import AppBar from '~/components/AppBar/AppBar'
import UserInfo from './UserInfo/UserInfo'
import Divider from '@mui/material/Divider'
import { followUnfollow } from '~/apis'

function UserPage() {
  const followUnFollow = async (userRequestId) => {
    await followUnfollow(userRequestId)
  }
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row'
    }}>
      <AppBar/>
      <Divider orientation="vertical" variant="middle" flexItem />
      <UserInfo followUnFollow={followUnFollow}/>
    </Box>
  )
}

export default UserPage