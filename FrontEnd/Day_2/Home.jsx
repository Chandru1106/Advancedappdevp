// HomePage.js

import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Footer from "./Footer";
const HomePage = () => {
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#2E7D32',width: '208.2vh' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Agriculture Loan App
          </Typography>
          <Button color="inherit" component={Link} to="/apply">
            Apply Now
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About Us
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
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
            Welcome to Agriculture Loan App
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            We help farmers get the financial support they need for their agricultural endeavors.
          </Typography>
          <Button variant="contained" color="primary" size="large" component={Link} to="/apply">
            Apply Now
          </Button>
        </Container>
      </div>
      <div>
      <Container sx={{ mt: 6, mb: 6 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Paper
            style={{
              padding: '20px',
              textAlign: 'center',
              backgroundColor: '#CD5C5C',
              borderRadius: '12px',
              color: '#ffffff',
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Easy Application
            </Typography>
            <Typography>
              Our application process is simple and hassle-free, ensuring a smooth experience for farmers.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            style={{
              padding: '20px',
              textAlign: 'center',
              backgroundColor: '#CD5C5C',
              borderRadius: '12px',
              color: '#ffffff',
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Quick Approval
            </Typography>
            <Typography>
              We understand the urgency of agricultural needs. Get quick approval for your loan application.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            style={{
              padding: '20px',
              textAlign: 'center',
              backgroundColor: '#CD5C5C',
              borderRadius: '12px',
              color: '#ffffff',
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Low Interest Rates
            </Typography>
            <Typography>
              Benefit from low-interest rates tailored for the agricultural sector to support your financial goals.
            </Typography>
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
