import HomePage from '~/pages/HomePage/_id'
import UserPage from '~/pages/UserPage/_id'
import { Route, Routes } from 'react-router-dom'
import Box from '@mui/material/Box'
import AuthPage from '~/pages/AuthPage/_id'
import { useRecoilValue } from 'recoil'
import userAtom from '~/atoms/userAtom'

function App() {
  const user = useRecoilValue(userAtom)
  return (
    <Box>
      <Routes>
        <Route path='/' element={user ? <HomePage/> : <AuthPage/>} />
        <Route path='/auth' element={!user ? <AuthPage/> : <HomePage/>} />
        <Route path='/profile' element={<UserPage/>} />
      </Routes>
    </Box>
  )
}

export default App
