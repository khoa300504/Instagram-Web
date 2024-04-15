import React from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import AppBar from './AppBar/AppBar'
import FeedContent from './FeedContent/FeedContent'
import SuggestBar from './SuggestBar/SuggestBar'
import Stack from '@mui/material/Stack'
import TempBar from './TempBar/TempBar'

function HomePage() {
  return (
    <Stack sx={{ flexDirection: { xs: 'column-reverse', sm: 'row' } }}
      spacing={2}
    >
      <AppBar/>
      <Divider orientation="vertical" variant="middle" flexItem sx={{ display: { xs: 'none', sm: 'flex' } }} />
      <FeedContent/>
      <SuggestBar/>
      <TempBar/>
    </Stack>
  )
}

export default HomePage