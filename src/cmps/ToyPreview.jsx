// import { Link } from 'react-router-dom'
// import { utilService } from '../services/util.service'
// import Button from '@mui/material/Button';

// export function ToyPreview({ toy, onDelete }) {
//   const regionalCurrencySymbol = '₪'
//   return (
//     <article className="toy-preview-item">
//       <h2>{toy.name} </h2>
//       <h4 className={`price ${toy.inStock ? 'in-stock' : 'not-in-stock'}`}>
//         {toy.price}
//         {regionalCurrencySymbol}
//       </h4>
//       <h5>{utilService.timeDiff(toy.createdAt)}</h5>
//       <h3>
//         {toy.labels.map((label, idx) => (
//           <span key={`${toy._id}${idx}`} className="toy-label">
//             {label}
//           </span>
//         ))}
//       </h3>
//       <div className="btn-container">
//         <Button variant='outlined' onClick={() => onDelete(toy._id)}>Delete</Button>
//         <Link to={`/toy/edit/${toy._id}`}>
//           <Button variant='outlined'>Edit</Button>
//         </Link>
//         <Link to={`/toy/${toy._id}`}>
//           <Button variant='outlined'>Details</Button>
//         </Link>
//       </div>
//     </article>
//   )
// }

import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'

export function ToyPreview({ toy, onDelete }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {toy.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="outlined" onClick={() => onDelete(toy._id)}>
          Delete
        </Button>
        <Link to={`/toy/edit/${toy._id}`}>
          <Button variant="outlined">Edit</Button>
        </Link>
        <Link to={`/toy/${toy._id}`}>
          <Button variant="outlined">Details</Button>
        </Link>
      </CardActions>
    </Card>
  )
}
