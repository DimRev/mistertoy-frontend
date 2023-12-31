import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import { utilService } from '../services/util.service'

export function ToyReviewMsgs({msg}) {
  console.log(msg)
  return (
    <Card sx={{margin:'1em'}} variant='outlined'>
      <Grid container>
        <Grid item sm={1}>
          <CardContent>
            <Avatar>{msg.owner.username.substring(0,1)}</Avatar>
          </CardContent>
        </Grid>
        <Grid item sm={11}>
          <CardContent>
            <Stack direction="row" alignItems="end" spacing={1}>
              <Typography variant="subtitle2">{msg.owner.username}</Typography>
              <Typography variant="caption" color="GrayText">
                {utilService.timeDiff(msg.createdAt)}
              </Typography>
            </Stack>
            <Typography >
              {msg.content}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}
