import { Send } from '@mui/icons-material'
import { Avatar, Button, Card, CardContent, Grid, Stack, TextField } from '@mui/material'
import { useState } from 'react'

export function ToyReviewMsgInput({onAddMsg}) {
  const [msg, setMsg] = useState('')

  function handleSubmit(){
    onAddMsg(msg)
    setMsg('')
  }

  function handleChange(ev){
    if(ev){
      setMsg(ev.target.value)
    }
  }

  return (
    <Card sx={{margin:'1em'}} variant='outlined'>
    <Grid container>
      <Grid item sm={1}>
        <CardContent>
          <Avatar>H</Avatar>
        </CardContent>
      </Grid>
      <Grid item sm={11}>
        <CardContent>
          <Stack direction="row" alignItems="end">
            <TextField multiline value={msg} onChange={handleChange} variant='standard' placeholder='Add your review here' fullWidth />
            <Button onClick={handleSubmit}><Send/></Button>
          </Stack>
        </CardContent>
      </Grid>
    </Grid>
  </Card>
  )
}
