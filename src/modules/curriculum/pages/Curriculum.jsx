import { CardMedia, Grid, Typography } from '@mui/material'

import { data } from 'mocks'

function Curriculum() {
  return (
    <Grid container>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <Grid
        item
        xs={3}
        style={{ backgroundColor: '#c4c4c4' }}
      >
        <Grid
          container
          direction="column"
          alignItems="center"
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
        style={{ backgroundColor: '#c5c5c5' }}
      >
        <Grid item>
          <Typography variant="h5">{data.name}</Typography>
          <Typography variant="body2">{data.course}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">{data.academic_education}</Typography>
          <Typography variant="body2">{data.university}</Typography>
          <Typography variant="body2">{data.university_message}</Typography>
          <Typography variant="body2">data.{data.school}</Typography>
          <Typography variant="body2">{data.school_essage}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">{data.work_sperience}</Typography>
          <Typography variant="body2">{data.bedu_tech}</Typography>
          <Typography variant="body2">{data.bedu_tech_message}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">{data.projects}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Curriculum
