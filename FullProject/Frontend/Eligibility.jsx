// Investment.js

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    TextField,
    Paper,
    Button,
    Container,
    Grid
  } from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Investment = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    income: '',
    landSize: '',
    crops: '',
    experience: '',
    loansTaken: '',
  });
  const [isEligible, setIsEligible] = useState(false);
  

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckEligibility = () => {
    // Add your eligibility check logic here
    // For demonstration purposes, eligibility is determined based on age (example condition)
    const isEligible = formData.age >= 18 && formData.income >= 50000 && formData.landSize >= 5;
    setIsEligible(isEligible);

    // Save form data to localStorage for persistence
    localStorage.setItem('eligibilityFormData', JSON.stringify(formData));
  };

  useEffect(() => {
    // Load form data from localStorage on component mount
    const savedFormData = localStorage.getItem('eligibilityFormData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#2E7D32', width: '208.2vh' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
            GrowWise Capital
          </Typography>
          <Button color="inherit" component={Link} to="/Home">
          Home
         </Button>
        <Button color="inherit" component={Link} to="/Investment">
          Investment
        </Button>
        <Button color="inherit" component={Link} to="/Eligibility">
         Eligibility Check
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
            <MenuItem component={Link} to="/Profile" onClick={handleMenuClose}>
            <PersonIcon style={{ marginRight: '8px', color: '#1E88E5' }} />
            Your Profile
          </MenuItem>
          <MenuItem component={Link} to="/TrackApp" onClick={handleMenuClose}>
            <TrackChangesIcon style={{ marginRight: '8px', color: '#43A047' }} />
            Track Application
          </MenuItem>
          <MenuItem component={Link} to="/Resource" onClick={handleMenuClose}>
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

      <div
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 0',
          textAlign: 'center',
          height: '55vh', // Set height to cover the full viewport
          color: '#000000', // Text color for better visibility
        }}
      >
        <Container>
          <Typography variant="h2" sx={{ mb: 4 }}>
            Welcome to GrowWise Capital
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            We help farmers get the financial support they need for their agricultural endeavors.
          </Typography>
        </Container>
      </div>
      <div style={{ backgroundColor: '#DCDCDC', padding: '50px 0', textAlign: 'center', fontFamily: 'Arial, sans-serif', color: '#333333' }}>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h2" sx={{ mb: 4 }}>
          Eligibility Check
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ padding: 3 }}>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Fill out the form to check your eligibility
              </Typography>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Annual Income (in ₹)"
                name="income"
                value={formData.income}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Land Size (in acres)"
                name="landSize"
                value={formData.landSize}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Crops Grown"
                name="crops"
                value={formData.crops}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Years of Farming Experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Number of Previous Loans Taken"
                name="loansTaken"
                value={formData.loansTaken}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <Button
                variant="contained"
                color="primary"
                endIcon={<ArrowForwardIcon />}
                onClick={handleCheckEligibility}
              >
                Check Eligibility
              </Button>
            </Paper>
          </Grid>
         
        </Grid>
      </Container>
        </div>
      {isEligible ? (
        <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#4CAF50', color: '#ffffff' }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Congratulations! You are eligible for our agricultural loan.
          </Typography>
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#D32F2F', color: '#ffffff' }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Sorry, you are not eligible for our agricultural loan.
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Investment;
