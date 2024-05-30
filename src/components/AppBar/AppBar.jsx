import { useRef, useState } from 'react'
import Box from '@mui/material/Box'
import { ReactComponent as InstagramTitle } from '~/assets/instagramTitle.svg'
import { ReactComponent as MessengerIcon } from '~/assets/messenger.svg'
import Badge from '@mui/material/Badge'
import SvgIcon from '@mui/material/SvgIcon'
import Chip from '@mui/material/Chip'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'
import MenuIcon from '@mui/icons-material/Menu'
import ModeToggle from '~/components/ModeSelect/ModeSelect'
import { useSetRecoilState } from 'recoil'
import userAtom from '~/atoms/userAtom'
import { toast } from 'react-toastify'
import { logout } from '~/apis/index'
import authStateAtom from '~/atoms/authStateAtom'
import { Link as RouterLink } from 'react-router-dom'
import Modal from '@mui/material/Modal'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Typography from '@mui/material/Typography'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import { styled } from '@mui/material/styles'
import Avatar from '@mui/material/Avatar'
import TextField from '@mui/material/TextField'
import Divider from '@mui/material/Divider'
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges'
import usePreviewImg from '~/hooks/usePreviewImg'
import { useConfirm } from 'material-ui-confirm'

const chipSx = {
  background: '#fff',
  padding: { sx: '0', sm: '10px 10px 10px 25px', md: '8px 60px 8px 5px' },
  fontSize: { xs: '0px', md: '16px' },
  '& .MuiSvgIcon-root' : {
    color: '#000 ',
    fontSize: '30px'
  },
  '& .messIcon' : {
    color: '#000',
    fontSize: '24px'
  },
  with: '28px',
  height: '28px',
  backgroundColor: 'transparent',
  gap: 1,
  '& .MuiBadge-badge': {
    fontSize: '10px',
    backgroundColor: '#000'
  }
}

const boxFuncSx = {
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f5f5f5'
  },
  padding: '8px 0',
  fontWeight: 'medium'
}

const ModalSx = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 830,
  height: 450,
  bgcolor: 'background.paper',
  border: '1px solid transparent',
  p: 2,
  borderRadius: '20px'
}

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


function AppBar({ handleCreatePost }) {
  const user = JSON.parse(localStorage.getItem('user-threads'))
  const setAuthState = useSetRecoilState(authStateAtom)
  const setUser = useSetRecoilState(userAtom)

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const confirm = useConfirm()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => setOpenModal(!openModal)
  const handleCloseModal = () => {
    confirm({
      title: 'Discard post?',
      // eslint-disable-next-line quotes
      description: "If you leave, your edits won't be saved.",
      confirmationText: 'Discard',

      allowClose: false,
      dialogProps: { maxWidth: 'xs' },
      cancellationButtonProps: { color: 'inherit' },
      confirmationButtonProps: { color: 'error' }
    })
      .then(() => {
        setOpenModal(!openModal)
      })
      .catch(() => {})
  }
  const [description, setDescription] = useState('')
  const imgRef = useRef(null)
  const { handleImgChange, handleAfterShare, postPic } = usePreviewImg()

  const handleShare = () => {
    const postData = {
      description,
      postPic
    }
    handleAfterShare()
    setDescription('')
    handleCreatePost(postData)
    setOpenModal(!openModal)
  }

  const handleLogout = async () => {
    const result = await logout()
    toast.success(result.message)
    localStorage.removeItem('user-threads')
    setAuthState('login')
    setUser(null)
  }
  return (
    <Box
      sx={{
        width: { xs: 'auto', sm: '140px', md: '230px' },
        display: 'flex',
        flexDirection: { xs: 'row', sm: 'column' },
        padding: '8px 12px 8px 12px',
        height: { xs: 'auto', sm: '100vh' },
        position: 'sticky',
        top: { xs: '', sm: '0px' },
        bottom: { xs: '0px', sm: '' },
        alignItems: { md: 'flex-start', xs: 'center' }
      }}>
      <Box>
        <SvgIcon component={InstagramTitle} inheritViewBox sx={{
          color: '#000',
          cursor: 'pointer',
          height: '29px',
          width: '110px',
          margin: '30px 12px 16px 12px',
          display: { xs: 'none', sm: 'flex' }
        }} />
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'row', sm: 'column' },
        justifyContent: { xs: 'center' },
        gap: 1.5,
        padding: { xs: '5px 74px 10px 40px', md: '0' },
        margin: { xs: '0px 0px 0px 0px', sm: '25px 0 150px 0' },
        '& .resIcon': {
          display: { xs: 'none', sm: 'flex' }
        },
        backgroundColor: { xs: '#ccc', sm: 'transparent' }
      }}
      >
        <Link as={RouterLink} to={'/'}>
          <Box sx={boxFuncSx}>
            <Chip icon={<HomeIcon/>} label="Home" sx={chipSx} />
          </Box>
        </Link>
        <Box sx={boxFuncSx}>
          <Chip icon={<SearchIcon />} label="Search" sx={chipSx} />
        </Box>
        <Box sx={boxFuncSx}>
          <Chip icon={<ExploreOutlinedIcon />} label="Explore" sx={chipSx} />
        </Box>
        <Link as={RouterLink} to={'/message'} underline="none">
          <Box className="resIcon" sx={boxFuncSx}>
            <Chip icon={
              <Badge color="primary" badgeContent={1}>
                <SvgIcon className="messIcon" component={MessengerIcon} inheritViewBox/>
              </Badge>
            } label="Messages" sx={chipSx} />
          </Box>
        </Link>
        <Box className="resIcon" sx={boxFuncSx}>
          <Chip icon={<FavoriteBorderIcon />} label="Notification" sx={chipSx} />
        </Box>
        <Box onClick={handleOpenModal} sx={boxFuncSx}>
          <Chip icon={<AddCircleOutlineIcon />} label="Create" sx={chipSx} />
        </Box>
        <Link as={RouterLink} to={`/profile/${user?._id}`}>
          <Box sx={boxFuncSx}>
            <Chip icon={<PersonOutlineIcon />} label="Profile" sx={chipSx} />
          </Box>
        </Link>
      </Box>
      <Box >
        <Box sx={{ cursor: 'pointer',
          width: '211.89px',
          padding: '8px 0',
          fontWeight: 'medium',
          display: { xs: 'none', sm: 'flex' }
        }}>
          <Button
            id="more-button"
            aria-controls={open ? 'more-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{ gap: 2, color: '#000' }}
          >
            <MenuIcon/>
            More
          </Button>
          <Menu
            id="more-menu"
            aria-labelledby="more-button"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={null} sx={{ display: 'flex', justifyContent: 'center' }}><ModeToggle/></MenuItem>
            <MenuItem sx={{ gap: 5 }} onClick={handleCloseMenu}><SettingsIcon/> Setting</MenuItem>
            <MenuItem sx={{ gap: 5 }} onClick={handleLogout}><LogoutIcon/> Logout</MenuItem>
          </Menu>
        </Box>
      </Box>
      {/* Modal Create Post */}
      <Box>
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={ModalSx}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <ArrowBackIcon sx={{ cursor: 'pointer' }}/>
              <Typography sx={{ fontWeight: 'bold' }}>Create new post</Typography>
              <Typography sx={{
                cursor: 'pointer',
                fontWeight: 'medium',
                color: '#2196f3',
                '&:hover': { color: '#1976d2' }
              }}
              onClick={handleShare}
              >Share</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Box sx={{
                width: '65%',
                height: 400,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderTop: 1,
                borderRight: 1,
                borderColor: '#ccc'
              }}>
                {postPic
                  ? <Box sx={{ backgroundImage:`url(${postPic})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }}/>
                  : <Button
                    component="label"
                    role={undefined}
                    tabIndex={-1}
                    startIcon={<FileUploadIcon />}
                  >
                    Upload Image
                    <VisuallyHiddenInput type="file" onChange={handleImgChange} ref={imgRef}/>
                  </Button>
                }
              </Box>
              <Box sx={{
                borderTop: 1, width: '35%',
                borderColor: '#ccc',
                justifyContent: 'flex-start',
                display: 'flex',
                flexDirection: 'column',
                pt: 2,
                pl: 2,
                gap: 1
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ width: '32px', height: '32px' }} src='' />
                  <Typography variant='subtitle2' sx={{ fontSize: '14px', fontFamily: 'Roboto Mono' }}>Scarlett.04</Typography>
                </Box>
                <Box sx={{
                  width: '100%',
                  '& .MuiFormLabel-root': { justifyContent: 'center' },
                  '& .MuiInputBase-root': { p: 0 },
                  '& .MuiFormControl-root': { width: '100%' },
                  '& .MuiOutlinedInput-root': {
                    fontSize: '16px',
                    color: '#000',
                    fontFamily: 'Roboto Mono',
                    fontWeight: 'regular',
                    '&.Mui-focused fieldset': { borderColor: 'transparent' } }
                }}>
                  <TextField
                    id="standard-multiline-static"
                    multiline
                    placeholder="Write a caption..."
                    rows={7}
                    variant="outlined"
                    focused
                    onChange={(e) => {
                      setDescription(e.target.value)
                    }}
                    value={description}
                  />
                </Box>
                <Divider orientation="horizontal" variant="middle" flexItem sx={{ display: { xs: 'none', sm: 'flex' } }} />
                {
                  postPic
                    ? <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Button
                        component="label"
                        role={undefined}
                        tabIndex={-1}
                        startIcon={<PublishedWithChangesIcon />}
                      >
                        Change Image
                        <VisuallyHiddenInput type="file" onChange={handleImgChange}/></Button>
                    </Box>
                    : <Box></Box>
                }
              </Box>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Box>
  )
}

export default AppBar