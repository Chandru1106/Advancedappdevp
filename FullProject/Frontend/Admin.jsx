
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Bg from '../img/admin.jpg';
import IconButton from '@mui/material/IconButton';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';

import axios from 'axios';
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();


const Admin = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const isValidCredentials = await checkCredentials(username, password);

      if (isValidCredentials) {
        // Redirect to home page if credentials are valid
        // Use the navigate function to navigate to the specified route
        navigate('/AdminHome');
      } else {
        // Set loginError to true if credentials are not valid
        setLoginError(true);
      }
    } catch (error) {
      console.error('Axios error:', error.message);
      setLoginError(true);
    }
  };

  const checkCredentials = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:8080/authenticate', {
        username: username,
        password: password,
      });
  
      if (response.status === 200) {
        // Access token from response data
        const token = response.data.jwtToken;
        console.log("Token: ", token);
        localStorage.setItem('token', response.data.jwtToken);
        return true;
      } else {
        // Credentials are invalid
        return false;
      }
    } catch (error) {
      // Handle error (e.g., network error)
      throw new Error(error.message);
    }
  };
  

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' ,width: '1535px'}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={7}
          md={7}
          sx={{
            backgroundImage: `url(${Bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{ backgroundColor: '#808080',}}>
          <Box
            sx={{
              my: 20,
              mx: 12,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            
            <Grid item xs={1} sx={{ textAlign: 'right' }}>
  <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
    <IconButton color="inherit">
      <SupervisorAccountIcon />
    </IconButton>
  </Link>
</Grid>

            <Typography component="h1" variant="h5">
              Admin
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
    margin="normal"
    required
    fullWidth
    id="username" // Change id to username
    label="username" // Change label to Username
    name="username" // Change name to username
    autoComplete="username" // Change autoComplete to username
    autoFocus
    value={username} // Use username state variable
    onChange={(e) => setUsername(e.target.value)} // Update setUsername function
/>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword}>
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {loginError && (
                <Typography variant="body2" color="error">
                  Incorrect email or password. Please try again.
                </Typography>
              )}
              <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/SignUp">{"Don't have an account? Sign Up"}</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Admin;