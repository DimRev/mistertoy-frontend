import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import {
  Button,
  CardActionArea,
  CardActions,
  Chip,
  Grid,
  Rating,
  Stack,
} from '@mui/material'
import { utilService } from '../services/util.service'
import useAdminRedirect from '../../hooks/useAdminRedirect'
import { useSelector } from 'react-redux'

export function ToyPreview({ toy, onDelete }) {
  const user = useSelector((storeState) => storeState.userModule.loggedinUser)
  const isAdmin = useAdminRedirect(false)
  const isOwner = user?._id === toy?.owner?._id

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card
        variant="outlined"
        className="preview-card"
        sx={{
          margin: '.3em',
          padding: '.6em',
          placeSelf: 'center',
          height: 500,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <CardActionArea >
          <CardMedia
            component="img"
            height="250"
            image={toy.img}
            alt={toy.name}
          />
          <CardContent>
            <Stack direction="row" justifyContent="space-between">
              <Typography gutterBottom variant="h5" component="div">
                {toy.name}
              </Typography>
              <Chip
                color={toy.inStock ? 'success' : 'error'}
                label={`$${toy.price}`}
              />
            </Stack>
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
            <Rating name="read-only" value={toy.rating} readOnly />
          </CardContent>
        </CardActionArea>
        <CardActions
          className="btn-container"
          sx={{ justifyContent: 'space-between' }}>
          {(isAdmin || isOwner) && (
            <Button variant="contained" onClick={() => onDelete(toy._id)}>
              Delete
            </Button>
          )}
          {(isAdmin || isOwner) && (
            <Link to={`/toy/edit/${toy._id}`}>
              <Button variant="contained">Edit</Button>
            </Link>
          )}
          <Link to={`/toy/${toy._id}`}>
            <Button variant="contained">Details</Button>
          </Link>
        </CardActions>
        <CardContent>
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
      </Card>
    </Grid>
  )
}

/*
 <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={`${toy.img}`}
            alt={toy.name}
          />
          <CardContent>
            <Stack direction="row" justifyContent="space-between">
              <Typography gutterBottom variant="h5" component="div">
                {toy.name}
              </Typography>
              <Chip
                color={toy.inStock ? 'success' : 'error'}
                label={`$${toy.price}`}
              />
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
          {(isAdmin || isOwner) && (
            <Button variant="contained" onClick={() => onDelete(toy._id)}>
              Delete
            </Button>
          )}
          {(isAdmin || isOwner) && (
            <Link to={`/toy/edit/${toy._id}`}>
              <Button variant="contained">Edit</Button>
            </Link>
          )}
          <Link to={`/toy/${toy._id}`}>
            <Button variant="contained">Details</Button>
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
*/
