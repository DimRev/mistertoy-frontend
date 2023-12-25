import React from 'react'
export function ToyPreview({ toy }) {
  return (
    <article className="toy-preview">
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
      <button>Edit</button>
      <button>Delete</button>
      <button>Details</button>
    </article>
  )
}
