
import{ useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem,Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Button from '@mui/material/Button';

import { Container, Grid, Paper } from '@mui/material';
const Investment = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

 
  const investmentData = [
    { company: 'Green Fields Agriculture Ltd', amount: '₹40,00,000', industry: 'Agriculture', description: 'Supporting sustainable farming practices.' },
    { company: 'EcoTech Solutions Inc', amount: '₹60,00,000', industry: 'Renewable Energy', description: 'Investing in  green energy solutions.' },
    { company: 'TechHarvest Innovations', amount: '₹50,00,000', industry: 'Technology', description: 'Innovative tech solutions for agriculture.' },
    { company: 'Organic Foods Co.', amount: '₹35,00,000', industry: 'Food and Beverage', description: 'Promoting organic food production and distribution.' },
    { company: 'AgroInnovate Solutions', amount: '₹45,00,000', industry: 'Agribusiness', description: 'Empowering agribusiness with innovative solutions.' },
    { company: 'Renewable Harvest Group', amount: '₹55,00,000', industry: 'Renewable Energy', description: 'Investing in sustainable and renewable energy projects.' },
    { company: 'TechAgro Ventures', amount: '₹48,00,000', industry: 'Technology', description: 'Supporting technology-driven advancements in agriculture.' },
    { company: 'Sustainable Foods Ltd', amount: '₹38,00,000', industry: 'Food and Beverage', description: 'Promoting sustainability in the agriculture food industry.' },
    { company: 'AgroTech Innovations', amount: '₹42,00,000', industry: 'Agribusiness', description: 'Investing in technological innovations for agribusiness.' },
  ];
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
          backgroundImage: "url('https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundRepeat: 'no-repeat',
          
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 0',
          textAlign: 'center',
          height: '35vh', // Set height to cover the full viewport
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
        <Container>
          <Typography variant="h2" sx={{ mb: 4, mt: 4, color: '#333333' }}>
            Our Investments
          </Typography>
          <Grid container spacing={4}>
            {investmentData.map((investment, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Box
                  component={Paper}
                  elevation={3}
                  sx={{
                    padding: 2,
                    backgroundColor: '#F7F7F7',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2, color: '#333333' }}>
                    {investment.company}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 2, color: '#666666' }}>
                    Industry: {investment.industry}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 2, color: '#666666' }}>
                    Amount: {investment.amount}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2, color: '#333333' }}>
                    {investment.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Investment;
