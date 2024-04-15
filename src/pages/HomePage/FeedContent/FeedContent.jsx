import React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
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
import Stack from '@mui/material/Stack'
import { Divider } from '@mui/material'

function FeedContent() {
  return (
    <Box sx={{
      width: { sx: '500px', sm: '900px' }
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <AvatarGroup max={ 5 } sx={{ margin: '20px 0 0 0', gap: 5, justifyContent: 'center', '& .MuiAvatar-root': { borderColor: '#c62828', border: '3px solid #ff9800' } }}>
          <Box sx={{ cursor: 'pointer' }}>
            <Avatar alt="Obito" src="https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/ce40366c56de36c44ffdbb0066cdd3cd.jpg?alt=media&token=6af464b1-04af-41b1-86c9-d623532b0aad" />
            <Typography variant='caption'>Obito</Typography>
          </Box>
          <Box sx={{ cursor: 'pointer' }}>
            <Avatar alt="Luffy" src="https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/b33cf5488bac1c04f86df2304d141bba.jpg?alt=media&token=bc36be07-d92e-442b-ad27-79a02c490a01" />
            <Typography variant='caption'>Luffy</Typography>
          </Box>
          <Box sx={{ cursor: 'pointer' }}>
            <Avatar alt="Ronaldo" src="https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/5faa55c4c55c4c51a7a357a39da8f7db.jpg?alt=media&token=d70c4ae5-66e0-4038-8e4e-c6d1634de4a8" />
            <Typography variant='caption'>Ronaldo</Typography>
          </Box>
          <Box sx={{ cursor: 'pointer' }}>
            <Avatar alt="Hacker" src="https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/0da80c00d396748e93fdece8fcadaf74.jpg?alt=media&token=4d4c7a3f-c3cf-4381-9c59-b4b8cda31fc3" />
            <Typography variant='caption'>Master</Typography>
          </Box>
          <Box sx={{ cursor: 'pointer' }}>
            <Avatar alt="KhoaDev" src="https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/c077b0663e82bdd12ce0b0c35327e0d0.jpg?alt=media&token=9f1ec0bc-4c5e-4994-a157-dee9760c2ee7" />
            <Typography variant='caption'>Khoa</Typography>
          </Box>
        </AvatarGroup>
      </Box>
      <Stack
        sx={{ pt: { sx: '0', sm: 5 }, justifyContent: { xs: 'center', md: 'flex-start' } }}
        direction="column"
        alignItems="center"
        spacing={5}
      >
        <Card sx={{ width: '470px', boxShadow: 'none' }}>
          <CardHeader sx={{
            '& .MuiAvatar-img': { cursor: 'pointer' },
            '& .MuiTypography-body2': { cursor: 'pointer', width: '130px', fontWeight: 'medium' } }}
          avatar={
            <Avatar alt="Luffy" src="https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/b33cf5488bac1c04f86df2304d141bba.jpg?alt=media&token=bc36be07-d92e-442b-ad27-79a02c490a01" />
          }
          action={
            <IconButton aria-label="settings">
              <MoreHorizIcon />
            </IconButton>
          }
          title="Monkey D. Luffy"
          />
          <CardMedia sx={{ borderRadius: '5px' }}
            component="img"
            height="580px"
            image="https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/35d74368a8f1758eeb21037a8a5de269.jpg?alt=media&token=c08f4e46-2b71-4aca-bb34-722587a85953"
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
            <Typography variant="body2" color="text.secondary">
              Mới lụm em Kaido múp rụp tym cho mình
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: '470px', boxShadow: 'none' }}>
          <CardHeader sx={{
            '& .MuiAvatar-img': { cursor: 'pointer' },
            '& .MuiTypography-body2': { cursor: 'pointer', width: '130px', fontWeight: 'medium' } }}
          avatar={
            <Avatar alt="KhoaDev" src="https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/c077b0663e82bdd12ce0b0c35327e0d0.jpg?alt=media&token=9f1ec0bc-4c5e-4994-a157-dee9760c2ee7" />
          }
          action={
            <IconButton aria-label="settings">
              <MoreHorizIcon />
            </IconButton>
          }
          title="Khoa Nguyễn Dev"
          />
          <CardMedia sx={{ borderRadius: '5px' }}
            component="img"
            height="580px"
            image="https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/b7aaaa405e9565a73b21cc675eb6b140.jpg?alt=media&token=5b199a28-f1e2-498c-855b-288d76d77f0f"
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
            <Typography variant="body2" color="text.secondary">
              Mình đã có mặt tại A05 😎
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  )
}

export default FeedContent