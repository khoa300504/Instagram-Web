import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import LockPersonIcon from '@mui/icons-material/LockPerson'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import background from '~/images/authBackground2.jpg'
import { useState } from 'react'
import { Bounce, toast } from 'react-toastify'
import { createNewUser } from '~/apis'
import { useSetRecoilState } from 'recoil'
import authStateAtom from '~/atoms/authStateAtom'

function SignUp() {
  const setAuthState = useSetRecoilState(authStateAtom)
  const [inputs, setInputs] = useState({
    displayName: '',
    username: '',
    email: '',
    password: ''
  })
  const handleSignUp = async () => {
    const user = await createNewUser(inputs)
    toast.info('Successfully register 😎', {
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Bounce
    })
    localStorage.setItem('user-threads', JSON.stringify(user))
  }

  return (
    <Box sx={{ backgroundImage: `url(${background})`,
      height: '100vh',
      width: '100vw',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      pb: '200px'
    }}>
      <Paper elevation={3} sx={{
        mt: '200px',
        height: '70vh',
        width: '350px',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 20px',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        backdropFilter: 'blur(2px)',
        borderRadius: '20px'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 1 }}>
          <LockPersonIcon sx={{ color: '#000' }}/>
          <Typography sx={{ color: '#000' }}>Author: KhoaNguyen</Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 1,
          '& input': { color: '#2c3e50' },
          '& label.Mui-focused': {
            color: '#000'
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': { borderColor: '#95a5a6' }
          },
          '& .MuiButton-root': {
            backgroundColor: 'rgba(0, 0, 0, 1)',
            color: '#fff',
            '&:hover': {
              backgroundColor: 'transparent',
              color: '#000'
            }
          }
        }}>
          <TextField label="Your Name" variant="outlined" focused
            onChange={(e) => {setInputs({ ...inputs, displayName: e.target.value })}}
            value={inputs.displayName}
          />
          <TextField label="Username" variant="outlined" focused
            onChange={(e) => {setInputs({ ...inputs, username: e.target.value })}}
            value={inputs.username}
          />
          <TextField label="Email" variant="outlined" type='email' required focused
            onChange={(e) => {setInputs({ ...inputs, email: e.target.value })}}
            value={inputs.email}
          />
          <TextField label="Password" type='password' variant="outlined" focused
            onChange={(e) => {setInputs({ ...inputs, password: e.target.value })}}
            value={inputs.password}
          />
          <Button variant="contained" onClick={handleSignUp}>Register</Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 1 }}>
          <Typography sx={{ color: '#000' }}>Already have account</Typography>
          <Typography onClick={() => setAuthState('login')} sx={{ color: '#000', cursor: 'pointer', '&:hover': { color: '#0d47a1' } }}>Sign Up</Typography>
        </Box>
      </Paper>
    </Box>
  )
}

export default SignUp