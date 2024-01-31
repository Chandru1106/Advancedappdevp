import{ useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';

import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const HomePage = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static" sx={{marginTop: '-215px', backgroundColor: '#2E7D32', width: '208.2vh' }}>
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
            Add Resources
          </MenuItem>
          <MenuItem component={Link} to="/Admin" onClick={handleMenuClose}>
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
    </div>
  );
};

export default HomePage;
