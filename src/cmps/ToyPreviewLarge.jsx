import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions, Chip, Rating, Stack } from '@mui/material'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import useAdminRedirect from '../../hooks/useAdminRedirect'
import { useSelector } from 'react-redux'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ea1a5b',
      contrastText: '#ffffff', // Text color for primary
      dark: '#bf1248',
      light: '#ee497c',
    },
    secondary: {
      main: '#ea3e1a',
      contrastText: '#ffffff', // Text color for secondary
      dark: '#bf3012',
      light: '#ee6549',
    },
  },
})

export function ToyPreviewLarge({ toy, onDelete }) {
  const isAdmin = useAdminRedirect(false)
  const user = useSelector((storeState) => storeState.userModule.loggedinUser)
  const isOwner = toy?.owner?._id === user?._id


  return (
    <Card className="preview-card" sx={{ maxWidth: 1 }}>
      <ThemeProvider theme={theme}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={`/${toy.img}`}
            alt="green iguana"
          />
          <CardContent>
            <Stack direction="row" justifyContent="space-between">
            <Rating name="read-only" value={toy.rating} readOnly />
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
                  style={{ color: theme.palette.secondary.contrastText }}
                  size="small"
                  label={label}
                />
              ))}
            </Stack>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {(isAdmin || isOwner) && (
            <Button variant="outlined" onClick={() => onDelete(toy._id)}>
              Delete
            </Button>
          )}
          {(isAdmin || isOwner) && (
            <Link to={`/toy/edit/${toy._id}`}>
              <Button variant="outlined">Edit</Button>
            </Link>
          )}
          <Link to={`../../toy`}>
            <Button variant="outlined">Back</Button>
          </Link>
        </CardActions>
      </ThemeProvider>
    </Card>
  )
}
