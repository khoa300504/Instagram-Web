import { useState } from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import FlagIcon from '@mui/icons-material/Flag'

function Post({ post, user }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Card sx={{ width: '470px', boxShadow: 'none' }}>
      <CardHeader sx={{
        '& .MuiAvatar-img': { cursor: 'pointer' },
        '& .MuiTypography-body2': { cursor: 'pointer', width: '130px', fontWeight: 'medium' } }}
      avatar={
        <Avatar alt="Luffy" src={user?.avtImg} />
      }
      action={
        <Box>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'post-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreHorizIcon />
          </IconButton>
          <Menu
            id="post-menu"
            MenuListProps={{
              'aria-labelledby': 'post-button'
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} sx={{ gap: 2 }}>
              <BookmarkIcon/>
                  Save
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ gap: 2 }}>
              <VisibilityOffIcon/>
                  Hidden
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ gap: 2 }}>
              <FlagIcon/>
                  Report
            </MenuItem>
          </Menu>
        </Box>
      }
      title={user.userName}
      />
      <CardMedia sx={{ borderRadius: '5px' }}
        component="img"
        height="580px"
        image={post?.postImg}
        alt="Paella dish"
      />
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ChatBubbleOutlineIcon />
          </IconButton>
          <IconButton aria-label="share">
            <SendOutlinedIcon />
          </IconButton>
        </CardActions>
        <CardActions>
          <IconButton aria-label="share">
            <TurnedInNotIcon />
          </IconButton>
        </CardActions>
      </Box>
      <CardContent>
        <Typography variant="body2" color="text.secondary">{post?.title}</Typography>
      </CardContent>
    </Card>
  )
}

export default Post