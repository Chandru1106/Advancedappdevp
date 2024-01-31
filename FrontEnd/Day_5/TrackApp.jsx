import  { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

const AdminPage = () => {
  const [applicationId, setApplicationId] = useState('');
  const [loanData, setLoanData] = useState(null);

  const handleSearch = () => {
    // TODO: Fetch loan data from the backend based on the applicationId
    // Example: fetchLoanData(applicationId).then(data => setLoanData(data));

    // Simulated data for demonstration
    const simulatedLoanData = {
      fullName: 'John Doe',
      contactNumber: '1234567890',
      email: 'john.doe@example.com',
      loanAmount: '50000',
      purpose: 'Agricultural Investment',
      loanType: 'Agricultural Loan',
      documentType: 'Aadhaar',
      file: 'uploaded_document.pdf',
      status: 'Pending', // Status can be 'Pending', 'Approved', 'Rejected', etc.
    };

    setLoanData(simulatedLoanData);
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

export default AdminPage;
