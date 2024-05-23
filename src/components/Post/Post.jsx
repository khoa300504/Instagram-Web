import { useState } from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import SpeakerNotesOffIcon from '@mui/icons-material/SpeakerNotesOff'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import FlagIcon from '@mui/icons-material/Flag'
import DeleteIcon from '@mui/icons-material/Delete'
import PushPinIcon from '@mui/icons-material/PushPin'
import FavoriteIcon from '@mui/icons-material/Favorite'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'
import { likeUnlike } from '~/apis'

function Post({ post, userPost, currentFile }) {
  const currentUserId = JSON.parse(localStorage.getItem('user-threads'))?._id
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const [likeCount, setLikeCount] = useState(post?.likes?.length)
  const [like, setLike] = useState(post?.likes.includes(currentUserId))
  const [save, setSave] = useState(false)

  const toggleLike = async () => {
    setLike(!like)
    if (like) setLikeCount(likeCount-1)
    if (!like) setLikeCount(likeCount+1)
    await likeUnlike(post?._id)
  }
  const toggleSave = () => {
    setSave(!save)
  }

  return (
    <Card sx={{ width: '470px', boxShadow: 'none', mb: 5 }}>
      <CardHeader sx={{
        '& .MuiAvatar-img': { cursor: 'pointer' },
        '& .MuiTypography-body2': { cursor: 'pointer', maxWidth: '130px', fontWeight: 'medium' } }}
      avatar={
        <Link underline="none" as={RouterLink} to={`/profile/${post.userId}`}>
          <Avatar alt="Luffy" src={userPost?.userPic} />
        </Link>
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
          {currentFile === 'feed' &&
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
              <VisibilityOffIcon/>
                  Hidden
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ gap: 2 }}>
              <FlagIcon/>
                  Report
            </MenuItem>
          </Menu>
          }
          {currentFile === 'userPost' &&
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
              <PushPinIcon/>
                  Pin
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ gap: 2 }}>
              <DeleteIcon/>
                  Delete
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ gap: 2 }}>
              <SpeakerNotesOffIcon/>
                  Off Comment
            </MenuItem>
          </Menu>
          }
        </Box>
      }
      title={
        <Link underline="none" as={RouterLink} to={`/profile/${post.userId}`} sx={{ color: '#000' }}>
          {userPost?.displayName}
        </Link>
      }
      />
      <CardMedia sx={{ borderRadius: '5px' }}
        component="img"
        height="580px"
        image={post?.postPic}
        alt="Paella dish"
      />
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', gap: 1, pt: 1, pb: 1 }}>
          { like
            ? <FavoriteIcon onClick={toggleLike} sx={{ cursor: 'pointer', color: '#e91e63' }} />
            : <FavoriteBorderIcon onClick={toggleLike} sx={{ cursor: 'pointer', color: '#000' }} />
          }
          <ChatBubbleOutlineIcon sx={{ cursor: 'pointer' }} />
          <SendOutlinedIcon sx={{ cursor: 'pointer' }} />
        </Box>
        <Box sx={{ display: 'flex', gap: 1, pt: 1, pb: 1 }}>
          { save
            ? <BookmarkIcon onClick={toggleSave} sx={{ cursor: 'pointer' }} />
            : <BookmarkBorderIcon onClick={toggleSave} sx={{ cursor: 'pointer' }} />
          }
        </Box>
      </Box>
      <Box>
        <Typography color="#7f8c8d">{likeCount} likes</Typography>
        <Typography variant="body2" color="#000">{post?.description}</Typography>
      </Box>
    </Card>
  )
}

export default Post