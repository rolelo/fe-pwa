import { AccessibilityNewOutlined, Mail, SentimentSatisfied, VisibilityOffOutlined } from '@mui/icons-material';
import { Avatar, Box, Divider, Grid, Typography } from '@mui/material';
import theme from '../../../static/theme';


const Power = () => {
  return (
    <Grid container xs={12} rowGap={4}
      paddingLeft={{ xs: 4, sm: 6, md: 8, lg: 30 }}
      paddingRight={{ xs: 4, sm: 6, md: 8, lg: 30 }}
      paddingTop={{ xs: 4, sm: 6, md: 8 }}
      paddingBottom={{ xs: 4, sm: 6, md: 8 }}
      sx={{
        backgroundColor: theme.palette.background.default
      }}>
      <Grid item xs={12}>
        <Typography variant="h1">Giving back power to the job seekers</Typography>
        <Typography variant="body1" sx={{ paddingTop: 2 }}>
          Recruitment is normally a daunting task, both for job seekers and hiring managers.
          <br />
          Our mission is to simplify the process of recruitment by removing all intermediaries and allowing you to get in touch
          with the hiring managers directly.
        </Typography>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Avatar color="secondary">
              <AccessibilityNewOutlined color="action" />
            </Avatar>
            <Typography variant="h3">High Flexibility</Typography>
            <Typography variant="body1">
              Our service offers you the opportunity to customise your dream job. We will then filter out all of the available jobs that
              meet your expectations based on the criteria which you have provided.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Avatar color="secondary">
              <SentimentSatisfied color="action" />
            </Avatar>
            <Typography variant="h3">Simple Application</Typography>
            <Typography variant="body1">
              All of our jobs include a simple application process. All you need to do is to create an account, upload your CV and then
              you can available positions with one click.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Avatar color="secondary">
              <Mail color="action" />
            </Avatar>
            <Typography variant="h3">Fast Responses</Typography>
            <Typography variant="body1">
              As we completely remove all 3rd parties and middlemen in the hiring process, you will be connecting directly with the companies hiring manager.
              This allows for better and faster communication between both parties.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Avatar color="secondary">
              <VisibilityOffOutlined color="action" />
            </Avatar>
            <Typography variant="h3">No Hidden Surprises</Typography>
            <Typography variant="body1">
              All of our positions come with full detailed explanation regarding the salary, working policy (remote, hybrid etc),
              number of interview stages, and number of applicants for this position.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {/* <Grid item xs={12} paddingTop={{ xs: 2, sm: 3, md: 4 }}
        paddingBottom={{ xs: 2, sm: 3, md: 4 }}>
        <Divider sx={{ backgroundColor: theme.palette.background.paper }} />
      </Grid> */}
    </Grid>
  )
}

export default Power