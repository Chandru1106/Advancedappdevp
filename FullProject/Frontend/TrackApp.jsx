import  { useState ,useEffect} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

import axios from 'axios';

const TrackPage = () => {
  const [applicationId, setApplicationId] = useState('');
  const [loanData, setLoanData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [token, setToken] = useState('');
  
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/loan/application/${applicationId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setLoanData(response.data);
      setErrorMessage('');
    } catch (error) {
      console.error('Error fetching loan data:', error);
      setLoanData(null);
      setErrorMessage('Loan data not found for the provided ID.');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1px solid #ddd',
              borderRadius: '8px',
              backgroundColor: '#fff',
              padding: '20px',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
              Track Your Application
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="applicationId"
              label="Application ID"
              name="applicationId"
              autoFocus
              value={applicationId}
              onChange={(e) => setApplicationId(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSearch}
              sx={{ mt: 2 }}
            >
              Search
            </Button>

            {errorMessage && (
              <Typography variant="body1" color="error" sx={{ mt: 2 }}>
                {errorMessage}
              </Typography>
            )}

            {loanData && (
              <>
                <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
                  Loan Application Details
                </Typography>
                <Grid container spacing={2}>
                  {Object.entries(loanData).map(([key, value]) => (
                    <Grid item xs={12} key={key}>
                      <Typography variant="body1">
                        <strong>{key}:</strong> {value}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </>
            )}
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};


export default TrackPage;
