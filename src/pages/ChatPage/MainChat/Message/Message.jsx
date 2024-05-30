import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import useConversation from '~/zustand/useConversation'
import Tooltip from '@mui/material/Tooltip'
import Chip from '@mui/material/Chip'

function Message({ data }) {
  const { selectedConversation } = useConversation()
  const date = new Date(data?.createdAt)
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const formattedHours = String(hours).padStart(2, '0')
  const formattedMinutes = String(minutes).padStart(2, '0')

  return (
    (data?.senderId === selectedConversation?._id)
      ? <Box sx={{
        '& .MuiChip-root': {
          border: 'none',
          height: '50px'
        },
        '& .MuiChip-label': {
          p: '10px 15px 10px 10px',
          borderRadius: '20px'
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}>
        <Chip
          sx={{ maxWidth: '450px' }}
          avatar={<Avatar alt="Natacha" src={selectedConversation?.userPic} />}
          label={<Tooltip title="21:42" placement="right">
            <Typography
              variant='caption'
              sx={{
                color: '#000',
                backgroundColor: '#eeeeee',
                borderRadius: '20px', p: '10px 15px 10px 10px',
                fontSize: '14px' }}>{data?.message}</Typography>
          </Tooltip>}
          variant="outlined"
        />
      </Box>
      : <Box sx={{
        '& .MuiChip-root': {
          border: 'none',
          height: '50px'
        },
        '& .MuiChip-label': {
          p: '10px 0px 10px 10px',
          borderRadius: '20px'
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
      }}>
        <Chip
          sx={{ maxWidth: '450px', display: 'flex', flexDirection: 'row-reverse' }}
          label={<Tooltip title={formattedHours+':'+formattedMinutes} placement="left">
            <Typography
              variant='caption'
              sx={{
                color: '#000',
                backgroundColor: '#eeeeee',
                fontSize: '14px',
                borderRadius: '20px',
                p: '10px 10px 10px 15px'
              }}>{data?.message}</Typography>
          </Tooltip>}
          variant="outlined"
        />
      </Box>
  )}

export default Message