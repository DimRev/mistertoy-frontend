import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import InputAdornment from '@mui/material/InputAdornment'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { saveToy } from '../store/actions/toy.actions'
import { useNavigate } from 'react-router-dom'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'

export function ToyPreviewEdit({ toy }) {
  const [selectedToy, setSelectedToy] = useState(toy)
  const navigate = useNavigate()

  const handleTextInputChange = (event) => {
    setSelectedToy((prevSelectedToy) => ({
      ...prevSelectedToy,
      name: event.target.value,
    }))
  }

  const handleMultiSelectorChange = (event) => {
    setSelectedToy((prevSelectedToy) => ({
      ...prevSelectedToy,
      labels: event.target.value,
    }))
  }

  const handleNumberInputChange = (event) => {
    setSelectedToy((prevSelectedToy) => ({
      ...prevSelectedToy,
      price: event.target.value,
    }))
  }

  const handleCheckboxChange = (event) => {
    setSelectedToy((prevSelectedToy) => ({
      ...prevSelectedToy,
      inStock: !prevSelectedToy.inStock,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await saveToy(selectedToy)
      navigate('/toy')
      showSuccessMsg('Toy edited successfully')
    } catch (err) {
      showErrorMsg('Failed to edited toy')
    }
  }

  return (
    <section className="toy-edit-page">
      <form onSubmit={handleSubmit}>
        <img src={`../../${selectedToy.img}`} alt={selectedToy.name} />
        <Box m={2}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={selectedToy.name}
            onChange={handleTextInputChange}
          />
        </Box>
        <Box m={2}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="labels-label">Multi Selector</InputLabel>
            <Select
              labelId="labels-label"
              id="labels"
              multiple
              value={selectedToy.labels}
              onChange={handleMultiSelectorChange}
              label="labels">
              <MenuItem value="On wheels">On wheels</MenuItem>
              <MenuItem value="Box game">Box game</MenuItem>
              <MenuItem value="Art">Art</MenuItem>
              <MenuItem value="Baby">Baby</MenuItem>
              <MenuItem value="Doll">Doll</MenuItem>
              <MenuItem value="Puzzle">Puzzle</MenuItem>
              <MenuItem value="Outdoor">Outdoor</MenuItem>
              <MenuItem value="Battery Powered">Battery Powered</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box m={2}>
          <TextField
            label="Price"
            variant="outlined"
            fullWidth
            type="number"
            value={selectedToy.price}
            onChange={handleNumberInputChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Box>
        <Box m={2}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedToy.inStock}
                  onChange={handleCheckboxChange}
                />
              }
              label="In stock"
            />
          </FormGroup>
        </Box>
        <Box m={2}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </section>
  )
}
