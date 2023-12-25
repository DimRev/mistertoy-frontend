import React, { useEffect, useRef, useState } from 'react'

import { setFilter, setSort } from '../../store/actions/toy.actions'

import { utilService } from '../../services/util.service'
import { useSelector } from 'react-redux'

export function ToyFilter() {
  const filterBy = useSelector(storeState => storeState.toyModule.filterBy)
  const sortBy = useSelector(storeState => storeState.toyModule.sortBy)

  useEffect(() => {
    setFilter(filterBy)
    setSort(sortBy)
  }, [filterBy, sortBy])

  const debounceSetFilter = useRef(utilService.debounce(setFilter, 500))

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === 'radio') {
      setFilter({
        ...filterBy,
        [name]: value,
      })
    } else if (type === 'select-one') {
      setSort(value)
    } else {
      debounceSetFilter.current({
        ...filterBy,
        [name]: value,
      })
    }
  }

  return (
    <section className="toy-filter-section">
      <h4>Filter toys</h4>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={handleChange} />
        <div>
          <label htmlFor="all">All</label>
          <input
            type="radio"
            name="stockStatus"
            id="all"
            value="all"
            defaultChecked
            onChange={handleChange}
          />

          <label htmlFor="notInStock">Not in stock</label>
          <input
            type="radio"
            name="stockStatus"
            id="notInStock"
            value="notInStock"
            onChange={handleChange}
          />

          <label htmlFor="inStock">In stock</label>
          <input
            type="radio"
            name="stockStatus"
            id="inStock"
            value="inStock"
            onChange={handleChange}
          />
        </div>
      </form>
      <h4>Sort results</h4>
      <select name="sortBy" value={sortBy} onChange={handleChange}>
        <option value="name">Name</option>
        <option value="price">Price</option>
        <option value="date">Date</option>
      </select>
    </section>
  )
}
