import HomePage from '~/pages/HomePage/_id'
import UserPage from '~/pages/UserPage/_id'
import AuthPage from '~/pages/AuthPage/_id'
import ChatPage from '~/pages/ChatPage/_id'
import UpdateProfile from '~/pages/UpdateProfile/_id'
import { Route, Routes } from 'react-router-dom'
import Box from '@mui/material/Box'
import { useRecoilValue } from 'recoil'
import userAtom from '~/atoms/userAtom'
import firebase from 'firebase/compat/app'

const firebaseConfig = {
  apiKey: 'AIzaSyC19JiuyfTNXNPYNrOzISAWA8myHil4oao',
  authDomain: 'bookingticketapp-4194d.firebaseapp.com',
  databaseURL: 'https://bookingticketapp-4194d-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'bookingticketapp-4194d',
  storageBucket: 'bookingticketapp-4194d.appspot.com',
  messagingSenderId: '445576866253',
  appId: '1:445576866253:web:a1e2c57fa3b410c1803c84'
}
firebase.initializeApp(firebaseConfig)

function App() {
  const user = useRecoilValue(userAtom)
  return (
    <Box>
      <Routes>
        <Route path='/' element={user ? <HomePage/> : <AuthPage/>} />
        <Route path='/auth' element={!user ? <AuthPage/> : <HomePage/>} />
        <Route path='/profile/:id' element={user ? <UserPage/> : <AuthPage/>} />
        <Route path='/message/' element={user ? <ChatPage/> : <AuthPage/>} />
        <Route path='/update/:id' element={<UpdateProfile/>} />
      </Routes>
    </Box>
  )
}

export default App
