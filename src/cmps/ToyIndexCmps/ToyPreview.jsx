import { Link } from 'react-router-dom'

export function ToyPreview({ toy, onDelete }) {
  return (
    <article className="toy-preview-item">
      <h2>{toy.name} </h2>
      <h4>
        {toy.price} {toy.inStock ? 'In stock' : 'Not in stock'}
      </h4>
      <h3>
        {toy.labels.map((label, idx) => (
          <span key={`${toy._id}${idx}`} className="toy-label">
            {label}
          </span>
        ))}
      </h3>
      <button onClick={() => onDelete(toy._id)}>Delete</button>
      <Link to={`/toy/edit/${toy._id}`}>
        <button>Edit</button>
      </Link>
      <Link to={`/toy/${toy._id}`}>
        <button>Details</button>
      </Link>
    </article>
  )
}
