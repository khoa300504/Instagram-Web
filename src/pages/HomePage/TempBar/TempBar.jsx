import Box from '@mui/material/Box'
import React from 'react'
import { ReactComponent as InstagramTitle } from '~/assets/instagramTitle.svg'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as MessengerIcon } from '~/assets/messenger.svg'
import Badge from '@mui/material/Badge'
import Chip from '@mui/material/Chip'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

function TempBar() {

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

  return (
    <Box sx={{
      display: { xs: 'flex', sm: 'none' },
      flexDirection: 'row',
      padding: '8px 12px 8px 12px',
      alignItems: { md: 'flex-start', xs: 'center' },
      justifyContent: 'space-between'
    }}>
      <Box>
        <SvgIcon component={InstagramTitle} inheritViewBox sx={{
          color: '#000',
          cursor: 'pointer',
          height: '29px',
          width: '110px',
          margin: { sx: '0', sm: '30px 12px 16px 12px' }
        }} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ cursor: 'pointer',
          padding: '8px 0',
          fontWeight: 'medium' }}>
          <Chip icon={
            <Badge color="primary" badgeContent={1}>
              <SvgIcon className="messIcon" component={MessengerIcon} inheritViewBox/>
            </Badge>
          } label="Messages" sx={chipSx} />
        </Box>
        <Box sx={{ cursor: 'pointer',
          padding: '8px 0',
          fontWeight: 'medium' }}>
          <Chip icon={<FavoriteBorderIcon />} label="Notification" sx={chipSx} />
        </Box>
      </Box>
    </Box>
  )
}

export default TempBar