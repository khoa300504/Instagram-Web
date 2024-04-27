import { useState } from 'react'
import {
  useColorScheme
} from '@mui/material/styles'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import LightModeIcon from '@mui/icons-material/LightMode'
import NightlightIcon from '@mui/icons-material/Nightlight'
import Button from '@mui/material/Button'
import { Box } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import SwitchLeftIcon from '@mui/icons-material/SwitchLeft'

function ModeSelect() {
  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
    setSelected(!selected)
  }

  const [selected, setSelected] = useState(false)

  const { mode, setMode } = useColorScheme()
  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={toggleMode}
      sx={{ height: '24px', '& .MuiSvgIcon-root': { fontSize: '24px' }, border: 'none', width: '100%', '&:hover': { backgroundColor: 'transparent' } }}
    >
      <SwitchLeftIcon /> Mode
    </ToggleButton>
  )
}

export default ModeSelect