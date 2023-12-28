import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadToys, saveToy, setSort } from '../store/actions/toy.actions'
import { utilService } from '../services/util.service'

export function DashboardProducts() {
  const toys = useSelector((storeState) => storeState.toyModule.toys)
  const sortBy = useSelector((storeState) => storeState.toyModule.sortBy)

  useEffect(() => {
    loadToys()
  }, [sortBy])

  function onSort(type) {
    setSort(type)
  }

  function onDiff(type, diff, toy) {
    console.log(type);
    let value = toy[type] + diff
    if (value < 0) {
      value = 0
      return
    } else if (value > toy.stock && type === 'inventory') {
      value = toy.stock
      return
    }
    let newToy = { ...toy, [type]: value }
    saveToy(newToy)
  }

  if (!toys || toys.length === 0) return <h1>Loading</h1>
  return (
    <section className="dashboard-products">
      <table>
        <tr>
          <th onClick={() => onSort('name')}>Name</th>
          <th onClick={() => onSort('price')}>Price</th>
          <th onClick={() => onSort('date')}>Created At</th>
          <th onClick={() => onSort('labels')}>Labels</th>
          <th onClick={() => onSort('inventory')}>Inventory</th>
          <th onClick={() => onSort('stock')}>Stock</th>
          <th onClick={() => onSort('inStock')}>In Stock</th>
        </tr>
        {toys.map((toy) => (
          <tr key={toy._id}>
            <td>{toy.name}</td>
            <td>${toy.price}</td>
            <td>{utilService.timeDiff(toy.createdAt)}</td>
            <td>{toy.labels.join(',')}</td>
            <td>
              <button onClick={() => onDiff('inventory', 1, toy)}>+</button>
              {toy.inventory}
              <button onClick={() => onDiff('inventory', -1, toy)}>-</button>
            </td>
            <td>
              <button onClick={() => onDiff('stock', 1, toy)}>+</button>
              {toy.stock}
              <button onClick={() => onDiff('stock', -1, toy)}>-</button>
            </td>
            <td>{toy.inStock ? 'In stock' : 'Out of stock'}</td>
          </tr>
        ))}
      </table>
    </section>
  )
}
