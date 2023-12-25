import { ToyPreview } from './ToyPreview'

export function ToyList({ toys, onDelete }) {
  if (!toys || !toys.length === 0) return <h1>Toy List : No toys</h1>
  return (
    <>
      {toys.map((toy) => (
        <ToyPreview key={toy._id} toy={toy} onDelete={onDelete} />
      ))}
    </>
  )
}
