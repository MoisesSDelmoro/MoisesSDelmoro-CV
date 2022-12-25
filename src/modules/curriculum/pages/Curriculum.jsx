// Libs
import { Card, CardMedia, Grid, Typography } from '@mui/material'

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
        xs={11.5}
        md={11}
        lg={10}
        pt={1}
      >
        <Card
          sx={{
            backgroundImage: `linear-gradient(to right, #2a187c, #6394c2)`,
            borderRadius: '20px',
            minHeight: '150px'
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={10}
        lg={8}
      >
        <Card
          sx={{ mt: -8, mx: { xs: 2, md: 4, lg: 8 }, borderRadius: '20px' }}
        >
          <Grid
            container
            width="100%"
            rowSpacing={2}
            columnSpacing={3}
            p={2}
          >
            <Grid
              item
              xs={12}
            >
              <Grid
                container
                justifyContent="flex-start"
              >
                <Grid item>
                  <CardMedia
                    sx={{
                      height: { xs: 100, md: 120, lg: 150 },
                      width: { xs: 100, md: 120, lg: 150 },
                      borderRadius: '20px'
                    }}
                    image={myImg}
                    title="My picture"
                  />
                </Grid>
                <Grid
                  item
                  pl={2}
                  mt={{ xs: 0, md: 2, lg: 4 }}
                >
                  <Typography variant="h5">{data.name}</Typography>
                  <Typography variant="body1">{data.course}</Typography>
                  <Typography variant="body1">{data.current}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              lg={5}
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
                  {data.contacts.map((item, index) => (
                    <Typography
                      variant="body2"
                      key={'contact' + index}
                    >
                      {item}
                    </Typography>
                  ))}
                </Grid>
                <Grid item>
                  <Typography variant="h6">{data.skills}</Typography>
                  <Grid container>
                    {data.my_skills.map((item, index) => (
                      <Grid item>
                        <Card
                          sx={{
                            backgroundColor: '#3b47ee',
                            borderRadius: '20px',
                            mt: 1,
                            ml: 1
                          }}
                        >
                          <Typography
                            variant="body2"
                            key={'skills' + index}
                            mx={1}
                            color="white"
                          >
                            {item}
                          </Typography>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="h6">{data.other_skills}</Typography>
                  <Grid container>
                    {data.my_other_skills.map((item, index) => (
                      <Grid item>
                        <Card
                          sx={{
                            backgroundColor: '#3b47ee',
                            borderRadius: '20px',
                            mt: 1,
                            ml: 1
                          }}
                        >
                          <Typography
                            variant="body2"
                            key={'otherSkills' + index}
                            mx={1}
                            color="white"
                          >
                            {item}
                          </Typography>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="body2">{data.languages}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              lg={7}
            >
              <Grid item>
                <Typography variant="h6">{data.academic_education}</Typography>
                <Typography variant="body2">{data.university_date}</Typography>
                <Typography variant="body2">{data.university}</Typography>
                <Typography variant="body2">
                  {data.university_message}
                </Typography>
                <br />
                <Typography variant="body2">{data.school_date}</Typography>
                <Typography variant="body2">{data.school}</Typography>
                <Typography variant="body2">{data.school_message}</Typography>
                <br />
              </Grid>
              <Grid item>
                <Typography variant="h6">{data.work_sperience}</Typography>
                <Typography variant="body2">
                  {data.cloud_matize_date}
                </Typography>
                <Typography variant="body2">{data.cloud_matize}</Typography>
                <Typography variant="body2">
                  {data.cloud_matize_message}
                </Typography>
                <br />
                <Typography variant="body2">{data.bedu_tech_date}</Typography>
                <Typography variant="body2">{data.bedu_tech}</Typography>
                <Typography variant="body2">
                  {data.bedu_tech_message}
                </Typography>
              </Grid>
              <br />
              {/* <Grid item>
                <Typography variant="body2">{data.projects}</Typography>
              </Grid> */}
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Curriculum
