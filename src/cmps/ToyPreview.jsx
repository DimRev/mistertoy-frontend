import { Link } from 'react-router-dom'
import { utilService } from '../services/util.service'
import Button from '@mui/material/Button';

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
        <Button variant='outlined' onClick={() => onDelete(toy._id)}>Delete</Button>
        <Link to={`/toy/edit/${toy._id}`}>
          <Button variant='outlined'>Edit</Button>
        </Link>
        <Link to={`/toy/${toy._id}`}>
          <Button variant='outlined'>Details</Button>
        </Link>
      </div>
    </article>
  )
}
