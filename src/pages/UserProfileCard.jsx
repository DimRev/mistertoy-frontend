import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { getUserById, updateUser } from '../store/actions/user.actions'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { useSelector } from 'react-redux'
import { Avatar } from '@mui/material'
import { cloudinaryService } from '../services/cloudinary.service'

export function UserProfileCard() {
  const user = useSelector((storeState) => storeState.userModule.loggedinUser)
  const [fullUser, setFullUser] = useState(null)
  const [editedUser, setEditedUser] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [imgUrl, setImgUrl] = useState('')

  useEffect(()=>{
    getUserById(user._id).then((newUser) => {
      setFullUser((prevUser) => {
        setEditedUser({...newUser})
        setImgUrl(newUser.imgUrl)
        return { ...prevUser, ...newUser }})
    })
  },[])

  function handleEditClick() {
    setIsEditing(true)
  }

  function handleCancelEdit() {
    setIsEditing(false)
    setEditedUser(fullUser)
  }

  async function handleSaveChanges() {
    try {
      if(!!imgUrl) await updateUser({...editedUser, imgUrl})
      else await updateUser(editedUser)
      setFullUser(editedUser)
      showSuccessMsg('User updated successfully')
    } catch (err) {
      showErrorMsg('Failed to update user: ' + err.message)
    }

    setIsEditing(false)
  }

  function handleChange(field, value) {
    setEditedUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }))
  }

  async function handleImgUpload(ev){
    const newImgUrl = await cloudinaryService.uploadImg(ev)
    setImgUrl(newImgUrl)
  }

  if(!fullUser) return <></>

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          User Profile
        </Typography>
        {isEditing ? (
          <>
            <input onChange={handleImgUpload} type="file"></input>
            <Avatar variant='rounded' src={imgUrl}>{fullUser.fullname.substring(0,1)}</Avatar>
            <TextField
              label="Full Name"
              fullWidth
              margin="normal"
              value={editedUser.fullname}
              onChange={(e) => handleChange('fullname', e.target.value)}
            />
            <TextField
              label="Score"
              fullWidth
              margin="normal"
              value={editedUser.score}
              onChange={(e) => handleChange('score', e.target.value)}
            />
            <TextField
              label="Username"
              fullWidth
              margin="normal"
              value={editedUser.username}
              onChange={(e) => handleChange('username', e.target.value)}
            />
          </>
        ) : (
          <>
            <Avatar variant='rounded' src={imgUrl}>{fullUser.fullname.substring(0,1)}</Avatar>
            <Typography variant="subtitle1">
              Full Name: {fullUser.fullname}
            </Typography>
            <Typography variant="subtitle1">Score: {fullUser.score}</Typography>
            <Typography variant="subtitle1">
              Username: {fullUser.username}
            </Typography>
          </>
        )}
      </CardContent>
      <Box display="flex" justifyContent="flex-end" p={2}>
        {isEditing ? (
          <>
            <Button onClick={handleCancelEdit} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSaveChanges} color="primary">
              Save Changes
            </Button>
          </>
        ) : (
          <Button onClick={handleEditClick} color="primary">
            Edit Profile
          </Button>
        )}
      </Box>
    </Card>
  )
}
