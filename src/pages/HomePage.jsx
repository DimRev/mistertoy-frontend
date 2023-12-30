import { Card, CardContent, Grid, Typography } from '@mui/material'

export function HomePage() {
  return (
    <>
      <section className="full hero-section">
        <Typography
          className="hero-title"
          variant="h2"
          fontWeight={600}
          textAlign="center">
          MisterToy Shop
        </Typography>
      </section>
      <section className="full recommendation-slider"></section>
      <section className="home-page-main">
        <Grid container rowGap={2} sx={{ marginTop: '1em' }}>
          <Grid item sm={12} md={9} lg={9}>
            <Card sx={{ height: '350px', marginInline: '.6em' }}>
              <CardContent>
                <Typography variant="h5">Important content</Typography>
                <Typography variant="overline">Lorem, ipsum dolor.</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, totam itaque voluptatum earum ea voluptatem
                  dolorem vel autem accusantium enim? Quis quod iste quibusdam
                  velit magni, libero voluptas autem dignissimos! Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Iusto cupiditate
                  est ipsum porro voluptatum numquam rem pariatur nisi ips Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Culpa illo
                  recusandae corporis molestiae distinctio porro ex eos laborum
                  minima quaerat odio eveniet debitis animi veniam facere
                  accusamus cupiditate quis impedit mollitia facilis consequatur
                  repudiandae molestias, repellat blanditiis! Assumenda
                  voluptates error animi esse optio rerum doloribus, non saepe
                  voluptatibus pariatur ullam. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Molestiae modi unde iusto eos
                  adipisci dolor nam, laudantium, libero natus doloremque iure,
                  quos quidem quia perspiciatis illum ratione ab molestias ipsa
                  eum quis. Culpa id harum vel odio veritatis quidem sed
                  nesciunt, quo repellat dolorum, vitae eveniet fugit?
                  Molestiae, magni voluptates!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={12} md={3} lg={3}>
            <Card sx={{ minHeight: '350px', marginInline: '.6em' }}>
              <CardContent>
                <Typography variant="h5">Bitpiece</Typography>
                <Typography variant="overline">Lorem, ipsum dolor.</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, totam itaque voluptatum earum ea voluptatem
                  dolorem vel autem accusantium enim? Quis quod iste quibusdam
                  velit magni, libero voluptas autem dignissimos!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={12} md={3} lg={6}>
            <Card sx={{ minHeight: '350px', marginInline: '.6em' }}>
              <CardContent>
                <Typography variant="h5">Regular content</Typography>
                <Typography variant="overline">Lorem, ipsum dolor.</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, totam itaque voluptatum earum ea voluptatem
                  dolorem vel autem accusantium enim? Quis quod iste quibusdam
                  velit magni, libero voluptas autem dignissimos!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={12} md={3} lg={6}>
            <Card sx={{ minHeight: '350px', marginInline: '.6em' }}>
              <CardContent>
                <Typography variant="h5">Regular content</Typography>
                <Typography variant="overline">Lorem, ipsum dolor.</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, totam itaque voluptatum earum ea voluptatem
                  dolorem vel autem accusantium enim? Quis quod iste quibusdam
                  velit magni, libero voluptas autem dignissimos!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={12} md={3} lg={6}>
            <Card sx={{ minHeight: '350px', marginInline: '.6em' }}>
              <CardContent>
                <Typography variant="h5">Regular content</Typography>
                <Typography variant="overline">Lorem, ipsum dolor.</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, totam itaque voluptatum earum ea voluptatem
                  dolorem vel autem accusantium enim? Quis quod iste quibusdam
                  velit magni, libero voluptas autem dignissimos!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={12} md={3} lg={6}>
            <Card sx={{ minHeight: '350px', marginInline: '.6em' }}>
              <CardContent>
                <Typography variant="h5">Regular content</Typography>
                <Typography variant="overline">Lorem, ipsum dolor.</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, totam itaque voluptatum earum ea voluptatem
                  dolorem vel autem accusantium enim? Quis quod iste quibusdam
                  velit magni, libero voluptas autem dignissimos!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>
      <section className="home-page-next">test</section>
    </>
  )
}
