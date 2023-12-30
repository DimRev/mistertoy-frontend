import { MutatingDots } from 'react-loader-spinner'
import { ToyPreview } from '../ToyPreview'
import { Grid, Pagination, Stack } from '@mui/material'
import { useEffect } from 'react'
import { setPage } from '../../store/actions/toy.actions'
import { useSelector } from 'react-redux'

export function ToyList({ toys, onDelete, isLoading }) {
  const page = useSelector((storeState) => storeState.toyModule.page)
  const totalPages = useSelector((storeState) => storeState.toyModule.totalPages)

  useEffect(()=>{
    setPage(1)
  },[])
  const handleChange = (event, value) => {
    setPage(value)
  }
  if (!toys || isLoading || !page)
    return (
      <section className="toy-list-section">
        <Stack
          direction="row"
          sx={{ gridColumn: 2 }}
          minHeight="calc(100dvh - 80px - 270px - 2em)">
          <MutatingDots
            className="toy-list-loader"
            visible={true}
            height="100"
            width="100"
            color="#ea1a5b"
            secondaryColor="#ea3e1a"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </Stack>
      </section>
    )
  if (!toys.length === 0) return <h1>Toy List : No toys</h1>
  return (
    <>
      <Grid container className="toy-list-section">
        {toys.map((toy) => (
          <ToyPreview key={toy._id} toy={toy} onDelete={onDelete} />
        ))}
      </Grid>
      <Stack direction='row' sx={{display:'flex',justifyContent:'center', margin:'1em'}}>
        <Pagination count={totalPages} page={page} onChange={handleChange} />
      </Stack>
    </>
  )
}
