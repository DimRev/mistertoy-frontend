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
import { Button, CardActionArea, CardActions, Chip, Stack } from '@mui/material'
import { utilService } from '../services/util.service'

export function ToyPreview({ toy, onDelete }) {
  return (
    <Card className="preview-card" sx={{ maxWidth: 345, height: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={`${toy.img}`}
          alt="green iguana"
        />
        <CardContent>
          <Stack direction="row" justifyContent="space-between">
            <Typography gutterBottom variant="h5" component="div">
              {toy.name}
            </Typography>
            <Typography
              color={toy.inStock ? 'green' : 'red'}
              fontWeight="700"
              gutterBottom
              variant="h5"
              component="div">
              $ {toy.price}
            </Typography>
          </Stack>
          <Stack direction="row" gap={0.2} flexWrap="wrap">
            {toy.labels.map((label, idx) => (
              <Chip
                key={`${toy._id}${idx}`}
                color="secondary"
                size="small"
                label={label}
              />
            ))}
          </Stack>
        </CardContent>
      </CardActionArea>
      <CardActions
        className="btn-container"
        sx={{ justifyContent: 'space-between' }}>
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
      <Typography
        sx={{
          marginInlineStart: 1,
          marginBlockEnd: 1,
          fontFamily: 'roboto',
          fontWeight: 600,
          color: 'GrayText',
        }}>
        {utilService.timeDiff(toy.createdAt)}
      </Typography>
    </Card>
  )
}
