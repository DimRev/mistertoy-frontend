import { Link } from 'react-router-dom'
import { utilService } from '../services/util.service'

export function ToyPreview({ toy, onDelete }) {
  const regionalCurrencySymbol = '₪'
  return (
    <article className="toy-preview-item">
      <h2>{toy.name} </h2>
      <h4 className={`price ${toy.inStock ? 'in-stock' : 'not-in-stock'}`}>
        {toy.price}
        {regionalCurrencySymbol}
      </h4>
      <h5>{utilService.timeDiff(toy.createdAt)}</h5>
      <h3>
        {toy.labels.map((label, idx) => (
          <span key={`${toy._id}${idx}`} className="toy-label">
            {label}
          </span>
        ))}
      </h3>
      <div className="btn-container">
        <button onClick={() => onDelete(toy._id)}>Delete</button>
        <Link to={`/toy/edit/${toy._id}`}>
          <button>Edit</button>
        </Link>
        <Link to={`/toy/${toy._id}`}>
          <button>Details</button>
        </Link>
      </div>
    </article>
  )
}
