import{ useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faSeedling, faMoneyBillWave,faHandHoldingUsd, faThumbsUp ,faFire} from '@fortawesome/free-solid-svg-icons';
import Footer from "./Footer";
const boxStyles = {
  position: 'relative',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)', // Adjust the scale factor for the desired zoom effect
  },
};
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
      <div style={{ backgroundColor: '#DCDCDC	', padding: '50px 0', textAlign: 'center', fontFamily: 'Arial, sans-serif', color: '#333333' }}>
        <Container>
          <Typography variant="h3" sx={{ mb: 4, color: '#333333' }}>
            Unlock Your Agricultural Potential
          </Typography>
          <Grid container spacing={4}>
            {/* Box 1 */}
            <Grid item xs={12} sm={6} md={4} sx={boxStyles}>
              <Paper elevation={3} sx={{ padding: 4, backgroundColor: '#FF7043', borderRadius: '12px', color: '#ffffff', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#ffffff', padding: '8px', borderRadius: '50%' }}>
                  <FontAwesomeIcon icon={faLeaf} style={{ fontSize: '24px', color: '#4CAF50' }} />
                </div>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Cultivate Success with GrowWise Capital
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Experience the difference with our tailor-made agricultural loans. Accelerate your farms growth and prosperity.
                </Typography>
                <Button variant="contained" color="primary" size="small" component={Link} to="/Apply">
                  Apply Now
                </Button>
              </Paper>
            </Grid>
            {/* Box 2 */}
            <Grid item xs={12} sm={6} md={4} sx={boxStyles}>
              <Paper elevation={3} sx={{ padding: 4, backgroundColor: '#4CAF50', borderRadius: '12px', color: '#ffffff', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#ffffff', padding: '8px', borderRadius: '50%' }}>
                  <FontAwesomeIcon icon={faSeedling} style={{ fontSize: '24px', color: '#2196F3' }} />
                </div>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Sow the Seeds of Financial Success
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Our innovative loan programs are designed to empower farmers. Secure your future with GrowWise Capital.
                </Typography>
                <Button variant="contained" color="primary" size="small" component={Link} to="/Apply">
                  Apply Now
                </Button>
              </Paper>
            </Grid>
            {/* Box 3 */}
            <Grid item xs={12} sm={6} md={4} sx={boxStyles}>
              <Paper elevation={3} sx={{ padding: 4, backgroundColor: '#2196F3', borderRadius: '12px', color: '#ffffff', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#ffffff', padding: '8px', borderRadius: '50%' }}>
                  <FontAwesomeIcon icon={faMoneyBillWave} style={{ fontSize: '24px', color: '#FF9800' }} />
                </div>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Harvest Prosperity with Confidence
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Join hands with GrowWise Capital for financial support that aligns with your agricultural dreams. Apply today!
                </Typography>
                <Button variant="contained" color="primary" size="small" component={Link} to="/Apply">
                  Apply Now
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={boxStyles}>
              <Paper elevation={3} sx={{ padding: 4, backgroundColor: '#FFC107', borderRadius: '12px', color: '#ffffff', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#ffffff', padding: '8px', borderRadius: '50%' }}>
                  <FontAwesomeIcon icon={faHandHoldingUsd} style={{ fontSize: '24px', color: '#FF7043' }} />
                </div>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Empower Your Agribusiness Finances
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  GrowWise Capital offers financial solutions to empower your agribusiness. Apply now and watch your success.
                </Typography>
                <Button variant="contained" color="primary" size="small" component={Link} to="/Apply">
                  Apply Now
                </Button>
              </Paper>
            </Grid>
            {/* Box 5 */}
            <Grid item xs={12} sm={6} md={4} sx={boxStyles}>
              <Paper elevation={3} sx={{ padding: 4, backgroundColor: '#673AB7', borderRadius: '12px', color: '#ffffff', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#ffffff', padding: '8px', borderRadius: '50%' }}>
                  <FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '24px', color: '#4CAF50' }} />
                </div>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Your Success, Our Commitment
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Partner with GrowWise Capital and experience unparalleled commitment to your agribusiness success. Apply now!
                </Typography>
                <Button variant="contained" color="primary" size="small" component={Link} to="/Apply">
                  Apply Now
                </Button>
              </Paper>
            </Grid>
           { /* Box 6 */}
<Grid item xs={12} sm={6} md={4} sx={boxStyles}>
  <Paper elevation={3} sx={{ padding: 4, backgroundColor: '#FF5722', borderRadius: '12px', color: '#ffffff', position: 'relative' }}>
    <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#ffffff', padding: '8px', borderRadius: '50%' }}>
      <FontAwesomeIcon icon={faFire} style={{ fontSize: '24px', color: '#FFC107' }} />
    </div>
    <Typography variant="h5" sx={{ mb: 2 }}>
      Ignite Your Agricultural Success
    </Typography>
    <Typography variant="body1" sx={{ mb: 3 }}>
      <p>
      GrowWise Capital fuels your farm{"'"}s potential. Ignite success in agribusiness by applying today.
      </p>
    </Typography>
    <Button variant="contained" color="primary" size="small" component={Link} to="/Apply">
      Apply Now
    </Button>
  </Paper>
</Grid>


          
          </Grid>
        </Container>
      </div>


      <div style={{ backgroundColor: '#4CAF50', padding: '100px 0', textAlign: 'center', fontFamily: 'Arial, sans-serif', color: '#ffffff' }}>
      <Container>
        <Typography variant="h3" sx={{ mb: 4, color: '#ffffff' }}>
          What our farmers say
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#81C784', borderRadius: '12px', color: '#ffffff' }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Working with this agricultural loan program has been a game-changer for my farm. The support and flexibility they offer have significantly contributed to my success. The process takes less time.
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                - Farmer John Doe
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#81C784', borderRadius: '12px', color: '#ffffff' }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                I highly recommend this agricultural loan service. The team is responsive, and the application process is straightforward. It has been a crucial part of expanding my agricultural activities.
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                - Farmer Jane Smith
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#81C784', borderRadius: '12px', color: '#ffffff' }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                The financial support provided by this agriculture loan program has allowed me to invest in modern farming techniques, leading to increased productivity and profitability.
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                - Farmer Robert Johnson
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
      <div style={{ padding: '100px 0', textAlign: 'center', backgroundColor: '#eceff1' }}>
</div>
<Footer />
    </div>
  );
};

export default HomePage;
