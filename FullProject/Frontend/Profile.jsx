
import {
  AppBar,
  Avatar,
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <div>
      <CssBaseline />
      <AppBar position="static" sx={{marginTop: '-290px', backgroundColor: '#2E7D32', width: '208.2vh' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            User Profile
          </Typography>
          <Button color="inherit" component={Link} to="/UpdateInfo">
            Update Info
          </Button>
          {/* Add more navigation buttons as needed */}
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ mt: 3 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar sx={{ width: 80, height: 80, mb: 2 }}>U</Avatar>
              <Typography variant="h5" gutterBottom>
                Gova
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Farmer
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Welcome to my profile page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                lobortis metus eu magna accumsan, vel dictum tortor elementum. Curabitur eu velit at erat
                placerat facilisis.
              </Typography>
              <Button variant="outlined" color="primary" sx={{ mt: 3 }}>
                Edit Profile
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProfilePage;
