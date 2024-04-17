import HomePage from '~/pages/HomePage/_id'
import UserPage from '~/pages/UserPage/_id'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path='/:username' element={<UserPage/>} />
      </Routes>
    </>
  )
}

export default App
