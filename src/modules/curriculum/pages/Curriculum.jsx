// Libs
import { Box, Card, CardMedia, Grid, Typography } from '@mui/material'

// Project
import myImg from 'assets/images/me.jpg'
import { data } from 'mocks'

function Curriculum() {
  return (
    <Grid
      container
      justifyContent="center"
    >
      <Grid
        item
        xs={11}
        pt={1}
      >
        <Card
          sx={{
            backgroundImage: `linear-gradient(to right, #2a187c, #6394c2)`,
            borderRadius: '20px',
            minHeight: '150px'
          }}
        >
          <Box m={2}></Box>
        </Card>
      </Grid>
      <Grid
        item
        xs={11}
      >
        <Card sx={{ mt: -8, mx: 8, borderRadius: '20px' }}>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={3}
            p={2}
          >
            <Grid
              item
              xs={12}
            >
              <CardMedia
                sx={{ height: 150, width: 150, borderRadius: '20px' }}
                image={myImg}
                title="Eu"
              />
            </Grid>
            <Grid
              item
              xs={3}
            >
              <Grid
                container
                rowSpacing={2}
                columnSpacing={3}
              >
                <Grid item>
                  <Typography variant="h6">{data.goal}</Typography>
                  <Typography variant="body2">{data.goal_message}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">{data.contact}</Typography>
                  {data.contacts.map((item) => (
                    <Typography
                      variant="body2"
                      key={item}
                    >
                      {item}
                    </Typography>
                  ))}
                </Grid>
                <Grid item>
                  <Typography variant="h6">{data.skills}</Typography>
                  {data.my_skills.map((item) => (
                    <Typography
                      variant="body2"
                      key={item}
                    >
                      {item}
                    </Typography>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={9}
            >
              <Grid item>
                <Typography variant="h5">{data.name}</Typography>
                <Typography variant="body2">{data.course}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  {data.academic_education}
                </Typography>
                <Typography variant="body2">{data.university}</Typography>
                <Typography variant="body2">
                  {data.university_message}
                </Typography>
                <Typography variant="body2">data.{data.school}</Typography>
                <Typography variant="body2">{data.school_essage}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">{data.work_sperience}</Typography>
                <Typography variant="body2">{data.bedu_tech}</Typography>
                <Typography variant="body2">
                  {data.bedu_tech_message}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">{data.projects}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Curriculum
