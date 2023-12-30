import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { updateUser } from '../store/actions/user.actions'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'

export function UserProfileCard({ fullUser,onEditUser }) {
  const [editedUser, setEditedUser] = useState(fullUser)
  const [isEditing, setIsEditing] = useState(false)

  function handleEditClick() {
    setIsEditing(true)
  }

  function handleCancelEdit() {
    setIsEditing(false)
    setEditedUser(fullUser)
  }

  async function handleSaveChanges() {
    console.log('Edited User:', editedUser)
    try {
      await updateUser(editedUser)
      onEditUser(editedUser)
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

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          User Profile
        </Typography>
        {isEditing ? (
          <>
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