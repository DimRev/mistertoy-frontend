import { MutatingDots } from 'react-loader-spinner'
import { ToyPreview } from '../ToyPreview'
import { Stack } from '@mui/material'

export function ToyList({ toys, onDelete, isLoading }) {
  if (!toys || isLoading)
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
    <section className="toy-list-section">
      {toys.map((toy) => (
        <ToyPreview key={toy._id} toy={toy} onDelete={onDelete} />
      ))}
    </section>
  )
}
