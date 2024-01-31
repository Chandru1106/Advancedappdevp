import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Container,
  TextField,
  Paper,
  Card,
  CardContent,
  CardMedia,
 
  Grid,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';

const UpdateInfo = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [farmersInformation, setFarmersInformation] = useState('');
  const [feature1, setFeature1] = useState('');
  const [feature2, setFeature2] = useState('');
  const [feature3, setFeature3] = useState('');

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleBackgroundImageChange = (event) => {
    setBackgroundImage(event.target.value);
  };

  const handleFarmersInfoChange = (event) => {
    setFarmersInformation(event.target.value);
  };

  const handleFeature1Change = (event) => {
    setFeature1(event.target.value);
  };

  const handleFeature2Change = (event) => {
    setFeature2(event.target.value);
  };

  const handleFeature3Change = (event) => {
    setFeature3(event.target.value);
  };

  const handleUpdateInfo = () => {
    // Add logic to update the home page information
    // For demonstration purposes, we'll just log the updated information
    console.log('Updated Background Image:', backgroundImage);
    console.log('Updated Farmers Information:', farmersInformation);
    console.log('Updated Feature 1:', feature1);
    console.log('Updated Feature 2:', feature2);
    console.log('Updated Feature 3:', feature3);
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#2E7D32', width: '208.2vh' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
            GrowWise Capital
          </Typography>
          <Button color="inherit" component={Link} to="/AdminHome">
      Home
    </Button>
    <Button color="inherit" component={Link} to="/Manage">
      Manage Loan
    </Button>
    <Button color="inherit" component={Link} to="/Update">
      Update Info
    </Button>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
              <PersonIcon style={{ marginRight: '8px', color: '#1E88E5' }} />
              Your Profile
            </MenuItem>
            <MenuItem component={Link} to="/resources" onClick={handleMenuClose}>
              <LocalLibraryIcon style={{ marginRight: '8px', color: '#FF6F00' }} />
              Resources
            </MenuItem>
            <MenuItem component={Link} to="/" onClick={handleMenuClose}>
              <ExitToAppIcon style={{ marginRight: '8px', color: '#D32F2F' }} />
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Container>
        <Paper elevation={3} sx={{ padding: 3, marginTop: 4 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Update Home Page Information
          </Typography>

          <TextField
            fullWidth
            label="Background Image URL"
            value={backgroundImage}
            onChange={handleBackgroundImageChange}
            margin="normal"
            variant="outlined"
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Farmers' Information"
            multiline
            rows={4}
            value={farmersInformation}
            onChange={handleFarmersInfoChange}
            margin="normal"
            variant="outlined"
            sx={{ mb: 2 }}
          />

          <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
            Update Features
          </Typography>

          <Grid container spacing={3}>
            {[1, 2, 3].map((featureNumber) => (
              <Grid item xs={12} md={4} key={featureNumber}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`https://via.placeholder.com/300?text=Feature+${featureNumber}`}
                    alt={`Feature ${featureNumber}`}
                  />
                  <CardContent>
                    <TextField
                      fullWidth
                      label={`Feature ${featureNumber}`}
                      value={featureNumber === 1 ? feature1 : featureNumber === 2 ? feature2 : feature3}
                      onChange={
                        featureNumber === 1
                          ? handleFeature1Change
                          : featureNumber === 2
                          ? handleFeature2Change
                          : handleFeature3Change
                      }
                      margin="normal"
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Button variant="contained" color="primary" onClick={handleUpdateInfo} sx={{ mt: 3 }}>
            Update Information
          </Button>
        </Paper>
      </Container>
    </div>
  );
};

export default UpdateInfo;
