import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import LockPersonIcon from '@mui/icons-material/LockPerson'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import background from '~/images/authBackground2.jpg'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import authStateAtom from '~/atoms/authStateAtom'
import { login } from '~/apis'
import { toast } from 'react-toastify'
import userAtom from '~/atoms/userAtom'

function SignIn() {
  const setAuthState = useSetRecoilState(authStateAtom)
  const setUser = useSetRecoilState(userAtom)
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  })

  const handleLogin = async () => {
    const result = await login(inputs)
    toast.success('Successfully Login 😎')
    localStorage.setItem('user-threads', JSON.stringify(result))
    setUser(localStorage.getItem('user-threads'))
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
        height: '55vh',
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
          '& input': { color: '#000', padding: '10px 8px', width: '240px' },
          '& label.Mui-focused': {
            color: '#2980b9',
            fontWeight: 'medium'
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': { borderColor: '#3498db' }
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
          <TextField label="Username*" variant="outlined" focused
            onChange={(e) => {
              setInputs({ ...inputs, username: e.target.value })
            }}
            value={inputs.username}
          />
          <TextField label="Password*" type='password' variant="outlined" focused
            onChange={(e) => {setInputs({ ...inputs, password: e.target.value })}}
            value={inputs.password}
          />
          <Button variant="contained" onClick={handleLogin}>Login</Button>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 0 }}>
          <Typography sx={{ color: '#000', fontSize: '16px' }}>Don&apos;t have account?&nbsp;</Typography>
          <Typography onClick={() => setAuthState('register')} sx={{ color: '#3498db', fontSize: '16px', cursor: 'pointer', '&:hover': { fontWeight: 'medium' } }}>Register</Typography>
        </Box>
      </Paper>
    </Box>
  )
}

export default SignIn