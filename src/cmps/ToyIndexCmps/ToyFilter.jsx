import React, { useEffect, useRef, useState } from 'react'

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'
import Chip from '@mui/material/Chip'
import Autocomplete from '@mui/material/Autocomplete'

import { setFilter } from '../../store/actions/toy.actions'

import { utilService } from '../../services/util.service'
import { useSelector } from 'react-redux'
import { Box, Stack } from '@mui/material'

export function ToyFilter() {
  const [value, setValue] = useState([labels[0]])

  const filterBy = useSelector((storeState) => storeState.toyModule.filterBy)

  useEffect(() => {
    setFilter(filterBy)
  }, [filterBy])

  useEffect(() => {
    setFilter({ ...filterBy, labels: value })
  }, [value])

  const debounceSetFilter = useRef(utilService.debounce(setFilter, 500))

  const handleMultipleSelection = (options) => {
    if (options.length === 0) {
      setValue(['All'])
      return
    }
    setValue(options.filter((option) => option !== 'All'))
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'radio') {
      setFilter({
        ...filterBy,
        [name]: value,
      })
    } else {
      debounceSetFilter.current({
        ...filterBy,
        [name]: value,
      })
    }
  }

  return (
    <section className="toy-filter-section">
      <Box width={600} justifySelf>
        <Stack>
          <TextField
            id="name-input"
            name="name"
            onChange={handleChange}
            label="Toy Search"
            variant="outlined"
          />
        </Stack>
          <FormControl>
            <FormLabel id="stock-status-radio-input">Stock Status</FormLabel>
            <RadioGroup
              onChange={handleChange}
              row
              defaultValue="all"
              aria-labelledby="stock-status-radio-input"
              name="stockStatus">
              <FormControlLabel value="all" control={<Radio />} label="all" />
              <FormControlLabel
                value="notInStock"
                control={<Radio />}
                label="Not in stock"
              />
              <FormControlLabel
                value="inStock"
                control={<Radio />}
                label="In stock"
              />
            </RadioGroup>
          </FormControl>
        <Stack>
          <Autocomplete
            multiple
            id="tags-outlined"
            limitTags={2}
            options={labels}
            value={value}
            onChange={(event, newValue) => {
              handleMultipleSelection(newValue)
            }}
            getOptionLabel={(option) => option}
            defaultValue={[labels[0]]}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField {...params} label="Labels" placeholder="Labels" />
            )}
          />
        </Stack>
      </Box>
    </section>
  )
}

const labels = [
  'All',
  'On wheels',
  'Box game',
  'Art',
  'Baby',
  'Doll',
  'Puzzle',
  'Outdoor',
  'Battery Powered',
]
