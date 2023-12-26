import React, { useEffect, useRef } from 'react'

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'

import { setFilter } from '../../store/actions/toy.actions'

import { utilService } from '../../services/util.service'
import { useSelector } from 'react-redux'

export function ToyFilter() {
  const filterBy = useSelector((storeState) => storeState.toyModule.filterBy)

  useEffect(() => {
    setFilter(filterBy)
  }, [filterBy])

  const debounceSetFilter = useRef(utilService.debounce(setFilter, 500))

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
      <h4 className="title">Filter toys</h4>

      <form className="filter-form">

        <TextField id="name-input" name="name" onChange={handleChange} label="Toy Search" variant="outlined" />

        <FormControl>
          <FormLabel id="stock-status-radio-input">Stock Status</FormLabel>
          <RadioGroup
            onChange={handleChange}
            row
            aria-labelledby="stock-status-radio-input"
            name="stockStatus">
            <FormControlLabel
              value="all"
              control={<Radio />}
              label="all"
            />
            <FormControlLabel value="notInStock" control={<Radio />} label="Not in stock" />
            <FormControlLabel value="inStock" control={<Radio />} label="In stock" />
          </RadioGroup>
        </FormControl>
      </form>
    </section>
  )
}
