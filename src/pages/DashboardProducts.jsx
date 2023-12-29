import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadToys, saveToy, setSort } from '../store/actions/toy.actions'
import { utilService } from '../services/util.service'
import {
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'

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
    console.log(type)
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
      <TableContainer
        sx={{ maxHeight: 'calc(100dvh - 80px - 4em)' }}
        component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableCell align="center" sx={{ backgroundColor: '#ccc' }}>
              <Typography fontWeight="600">Name</Typography>
            </TableCell>
            <TableCell align="center" sx={{ backgroundColor: '#ccc' }}>
              <Typography fontWeight="600">Price</Typography>
            </TableCell>
            <TableCell align="center" sx={{ backgroundColor: '#ccc' }}>
              <Typography fontWeight="600">Created</Typography>
            </TableCell>
            <TableCell align="center" sx={{ backgroundColor: '#ccc' }}>
              <Typography fontWeight="600">Labels</Typography>
            </TableCell>
            <TableCell align="center" sx={{ backgroundColor: '#ccc' }}>
              <Typography fontWeight="600">Inventory</Typography>
            </TableCell>
            <TableCell align="center" sx={{ backgroundColor: '#ccc' }}>
              <Typography fontWeight="600">Stock</Typography>
            </TableCell>
            <TableCell align="center" sx={{ backgroundColor: '#ccc' }}>
              <Typography fontWeight="600">In Stock</Typography>
            </TableCell>
          </TableHead>
          <TableBody>
            {toys.map((toy) => (
              <TableRow
                sx={{ backgroundColor: toy.inStock ? '' : '#ff000055' }}
                key={toy._id}>
                <TableCell width="20%" align="center">
                  <Typography>{toy.name}</Typography>
                </TableCell>
                <TableCell>
                  <Chip label={`$${toy.price}`} />
                </TableCell>
                <TableCell width="20%" align="center">
                  <Typography>{utilService.timeDiff(toy.createdAt)}</Typography>
                </TableCell>
                <TableCell width="40%" align="center">
                  <Box flexWrap="wrap">
                    {toy.labels.map((label) => (
                      <Chip
                        color="secondary"
                        key={label}
                        label={label}
                        size="small"
                      />
                    ))}
                  </Box>
                </TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Button onClick={() => onDiff('inventory', 1, toy)}>
                      +
                    </Button>
                    {toy.inventory}
                    <Button onClick={() => onDiff('inventory', -1, toy)}>
                      -
                    </Button>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center">
                    <Button onClick={() => onDiff('stock', 1, toy)}>+</Button>
                    {toy.stock}
                    <Button onClick={() => onDiff('stock', -1, toy)}>-</Button>
                  </Stack>
                </TableCell>
                <TableCell width="20%" align="center">
                  <Typography>
                    {toy.inStock ? 'In stock' : 'Not in stock'}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  )
}

{
  /* <table>
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
      </table> */
}
