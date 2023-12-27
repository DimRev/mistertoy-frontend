import { Link, useLocation } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions, Chip, Stack } from '@mui/material'


export function ToyPreviewLarge({ toy, onDelete }) {
  const location = useLocation()
  const isEditingToy = location.pathname.startsWith('/toy/edit');
  return (
      <Card className='preview-card' sx={{ maxWidth: 1 }}>
        <CardActionArea >
          <CardMedia
            component="img"
            height="300"
            image={`../../public/${toy.img}`}
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
            <Stack direction="row" spacing={1}>
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
