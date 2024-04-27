import { useState } from 'react'
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

function AppBar() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{
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
        <Link href="/feed">
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
        <Box className="resIcon" sx={boxFuncSx}>
          <Chip icon={
            <Badge color="primary" badgeContent={1}>
              <SvgIcon className="messIcon" component={MessengerIcon} inheritViewBox/>
            </Badge>
          } label="Messages" sx={chipSx} />
        </Box>
        <Box className="resIcon" sx={boxFuncSx}>
          <Chip icon={<FavoriteBorderIcon />} label="Notification" sx={chipSx} />
        </Box>
        <Box sx={boxFuncSx}>
          <Chip icon={<AddCircleOutlineIcon />} label="Create" sx={chipSx} />
        </Box>
        <Link href="/profile">
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
            onClose={handleClose}
          >
            <MenuItem onClick={null} sx={{ display: 'flex', justifyContent: 'center' }}><ModeToggle/></MenuItem>
            <MenuItem sx={{ gap: 5 }} onClick={handleClose}><SettingsIcon/> Setting</MenuItem>
            <MenuItem sx={{ gap: 5 }} onClick={handleLogout}><LogoutIcon/> Logout</MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  )
}

export default AppBar