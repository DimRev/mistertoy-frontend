import { ToyPreview } from './ToyPreview'

export function ToyList({ toys, onAdd, onDelete }) {
  if (!toys || !toys.length === 0) return <h1>Toy List : No toys</h1>
  return (
    <section className='toy-list-section'>
    <button onClick={onAdd}>Add toy</button>
      {toys.map((toy) => (
        <ToyPreview key={toy._id} toy={toy} onDelete={onDelete} />
      ))}
    </section>
  )
}
