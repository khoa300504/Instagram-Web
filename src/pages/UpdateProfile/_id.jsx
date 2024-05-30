import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { useRef, useState, useEffect } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CheckIcon from '@mui/icons-material/Check'
import { useConfirm } from 'material-ui-confirm'
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import { toast } from 'react-toastify'
import { getProfile, updateProfile } from '~/apis/index'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'
import { useParams } from 'react-router-dom'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
})

function UpdateProfile() {
  const [confimMessage, setConfimMessage] = useState('')
  const [currentUser, setCurrentUser] = useState(null)
  const [currentUserPic, setCurrentUserPic] = useState(null)
  const userRequest = useParams()
  useEffect(() => {
    getProfile(userRequest.id).then(
      user => {
        setCurrentUser(user)
        setCurrentUserPic(user ?user.userPic :null)
      }
    )
  }, [userRequest.id])

  const currentUserId = JSON.parse(localStorage.getItem('user-threads'))._id
  const imgRef = useRef(null)
  const [userPic, setUserPic] = useState(null)
  const [inputs, setInputs] = useState({
    fullname: null,
    email: null,
    displayName: null,
    bio: null,
    password: null,
    cfmpassword: null
  })
  const confirm = useConfirm()
  const handleChangeAvatar = async e => {
    let isUpdate = false
    await confirm({
      title: 'Change avatar',
      // eslint-disable-next-line quotes
      description: "This action will change or avatar.",
      confirmationText: 'Update',
      allowClose: false,
      dialogProps: { maxWidth: 'xs' },
      cancellationButtonProps: { color: 'inherit' },
      confirmationButtonProps: { color: 'success' }
    })
      .then(() => {isUpdate = true})
      .catch(() => {})
    if (isUpdate) {
      const file = e.target.files[0]
      if (file && file.type.startsWith('image/'))
      {
        const storageRef = firebase.storage().ref()
        const fileRef = storageRef.child(file.name)
        try {
          const snapshot = await fileRef.put(file)
          const downloadURL = await snapshot.ref.getDownloadURL()
          setUserPic(downloadURL)
          updateProfile({ userPic: downloadURL }, currentUserId)
        } catch (error) {
          toast.error('Error uploading file')
        }
      }
      else {
        toast.error('Wrong type')
        setInputs({ ...inputs, userPic: null })
      }
    }
  }
  const handleChangeInfo = async () => {
    const updateData = { ...inputs }
    for (let key in updateData) {
      if (updateData[key] === null ||updateData[key] === '' || ( key !== 'fullname' && key !== 'email' && key !== 'displayName' && key !== 'bio')) {
        delete updateData[key]
      }
    }
    confirm({
      title: 'Update',
      description: 'This action will update your profile.',
      confirmationText: 'Update',
      allowClose: false,
      dialogProps: { maxWidth: 'xs' },
      cancellationButtonProps: { color: 'inherit' },
      confirmationButtonProps: { color: 'success' }
    })
      .then(() => {
        toast.success('Update successfully')
        updateProfile(updateData, currentUserId)
      })
      .catch(() => {})
  }
  const handleChangePassword = async () => {
    const updatePassword = { ...inputs }
    if (updatePassword.password !== updatePassword.cfmpassword) setConfimMessage('Password doesn\'t match')
    else if (updatePassword.password.length < 8 || updatePassword.password.length > 16) setConfimMessage('Password must be 8-16 char')
    else {
      setConfimMessage(null)
      for (let key in updatePassword) {
        if (key !== 'password') {
          delete updatePassword[key]
        }
      }
      confirm({
        title: 'Change password',
        description: 'Update your password?',
        confirmationText: 'Update',
        confirmationKeywordTextFieldProps: { color: '#fff' },
        allowClose: false,
        dialogProps: { maxWidth: 'xs' },
        cancellationButtonProps: { color: 'inherit' },
        confirmationButtonProps: { color: 'success' }
      })
        .then(() => {
          const result = updateProfile(updatePassword, currentUserId)
          toast.success(result.message)
        })
        .catch(() => {})
    }
  }

  return (
    <Box sx={{ background: '#f5f6fa', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{ display: 'flex',
          flexDirection: 'column',
          mt: '100px',
          background: '#fff',
          height: '65vh',
          mr: '20px',
          width: '20vw',
          alignItems: 'center',
          borderRadius: 1 }}>
        <Avatar
          alt="User"
          src={userPic === null ? currentUserPic : userPic}
          sx={{ width: 100, height: 100, mt: '20px', mb: 1 }}
        />
        <Button
          component="label"
          role={undefined}
          tabIndex={-1}
          variant='contained'
          sx={{ mb: 3 }}
        >
                    Change Avatar
          <VisuallyHiddenInput type="file" onChange={handleChangeAvatar} ref={imgRef}/>
        </Button>
        <Typography sx={{ color: '#212121' }} variant="h6" gutterBottom>{currentUser?.fullname}</Typography>
        <Typography sx={{ opacity: '0.875', mb: 5, color: '#212121' }} variant="caption" display="overline" gutterBottom>{currentUser?.displayName}</Typography>
        <Typography sx={{ color: '#1e88e5' }} variant="button" gutterBottom>About</Typography>
        <Typography sx={{ pl: 3, pr: 3 }} variant="body2" gutterBottom>{currentUser?.bio}</Typography>
      </Box>
      <Box sx={{ mt: '100px', background: '#fff', height: '65vh', width: '35vw', borderRadius: 1, p: 3, gap: 5 }}>
        <Box sx={{ mb: 5 }}>
          <Typography sx={{ color: '#1e88e5' }} variant="subtitle2" gutterBottom>Personal Details</Typography>
          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
          >
            <Box>
              <TextField
                label="Fullname"
                variant="outlined"
                onChange={(e) => {setInputs({ ...inputs, fullname: e.target.value })}}
                value={inputs?.fullname || ''}
              />
              <TextField
                label="Email"
                variant="outlined"
                onChange={(e) => {setInputs({ ...inputs, email: e.target.value })}}
                value={inputs?.email || ''}
              />
            </Box>
            <Box>
              <TextField
                label="Display name"
                variant="outlined"
                onChange={(e) => {setInputs({ ...inputs, displayName: e.target.value })}}
                value={inputs?.displayName || ''}
              />
              <TextField
                label="Bio"
                variant="outlined"
                onChange={(e) => {setInputs({ ...inputs, bio: e.target.value })}}
                value={inputs?.bio || ''}
              />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
              <Link as={RouterLink} to={`/profile/${currentUserId}`}>
                <Button sx={{ width: '100px' }} variant="contained" startIcon={<ArrowBackIcon/>}>Back</Button>
              </Link>
              <Button sx={{ width: '100px' }} variant="contained" startIcon={<CheckIcon/>} onClick={handleChangeInfo}>Update</Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
          <Typography sx={{ color: '#1e88e5' }} variant="subtitle2" gutterBottom>Password</Typography>
          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
          >
            <Box>
              <TextField
                type="password"
                label="New password"
                variant="outlined"
                onChange={(e) => {setInputs({ ...inputs, password: e.target.value })}}
                value={inputs?.password || ''}
              />
              <TextField
                type="password"
                label="Confirm password"
                variant="outlined"
                onChange={(e) => {setInputs({ ...inputs, cfmpassword: e.target.value })}}
                value={inputs?.cfmpassword || ''}
              />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant="subtitle2" sx={{ color: '#d50000' }}>{confimMessage}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button sx={{ width: '170px' }} variant="contained" onClick={handleChangePassword}>Change Password</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default UpdateProfile