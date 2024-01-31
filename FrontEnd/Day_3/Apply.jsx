// LoanApply.js

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, TextField, FormControlLabel, Checkbox, Button, Container, Grid, Paper } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const LoanApply = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeStep, setActiveStep] = useState(0); // for progress indicator
  const [agreementChecked, setAgreementChecked] = useState(false);
  const [loanFormData, setLoanFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    loanAmount: '',
    purpose: '',
    loanType: '',
  });
  const [errors, setErrors] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    loanAmount: '',
    purpose: '',
    loanType: '',
  });
  const [confirmationData, setConfirmationData] = useState(null);
  const [applicationId, setApplicationId] = useState(null);
  const [file, setFile] = useState(null);
  


  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
  };

  const handleLoanFormChange = (event) => {
    const { name, value } = event.target;
    setLoanFormData({ ...loanFormData, [name]: value });
  };

  const handleAgreementChange = () => {
    setAgreementChecked(!agreementChecked);
  };

  const handleLoanFormSubmit = () => {
    // Check if any required field is empty
    const newErrors = {};
    Object.entries(loanFormData).forEach(([key, value]) => {
      if (!value) {
        newErrors[key] = 'This field is required';
      }
    });

    // Display error messages under the respective fields
    setErrors(newErrors);

    // If any field is empty, don't proceed with submission
    if (Object.keys(newErrors).length > 0) {
      return;
    }
    // Reset errors
    if (!agreementChecked) {
        alert('Please agree to the terms and conditions before submitting the form.');
        return;
    }
    const newApplicationId = generateApplicationId();
    setApplicationId(newApplicationId);
    
    if (!documentType) {
        newErrors.documentType = 'Please select a document type';
      }
    
      // Check if a file is uploaded
      if (!file) {
        newErrors.fileUpload = 'Please upload a document';
        // Display error messages under the respective fields
        setErrors(newErrors);
        return; // Add this line to stop further execution
      }
    
      // Display error messages under the respective fields
      setErrors(newErrors);
      if (Object.keys(newErrors).length > 0) {
        return;
      }
      
    
      // Reset errors
      setErrors({});
    
      // Continue with the rest of the submission logic
      if (!agreementChecked) {
        alert('Please agree to the terms and conditions before submitting the form.');
        return;
      }
    
    
      setConfirmationData({
        fullName: loanFormData.fullName,
        contactNumber: loanFormData.contactNumber,
        email: loanFormData.email,
        loanAmount: loanFormData.loanAmount,
        purpose: loanFormData.purpose,
        loanType: loanFormData.loanType,
        documentType: documentType,
        file: file,
      });
      setActiveStep(2); // Move to confirmation step
    };
  const [documentType, setDocumentType] = useState(''); // Add documentType state
  // Function to generate a 6-digit application ID

  // Function to generate a random 6-digit application ID
  const generateApplicationId = () => {
    // If the ID is already generated, return the existing ID
    if (applicationId !== null) {
      return applicationId;
    }

    // Otherwise, generate a new ID
    return Math.floor(100000 + Math.random() * 900000);
  };

  
  // ... (existing functions remain unchanged)

  const handleDocumentTypeChange = (event) => {
    setDocumentType(event.target.value);
  };
  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    console.log('Uploaded File:', uploadedFile);
  
    // Check if a file is selected
    if (uploadedFile) {
      setFile(uploadedFile);
      console.log('File Set:', uploadedFile);
    }
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
          <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
            <PersonIcon style={{ marginRight: '8px', color: '#1E88E5' }} />
            Your Profile
          </MenuItem>
          <MenuItem component={Link} to="/track" onClick={handleMenuClose}>
            <TrackChangesIcon style={{ marginRight: '8px', color: '#43A047' }} />
            Track Application
          </MenuItem>
          <MenuItem component={Link} to="/resources" onClick={handleMenuClose}>
            <LocalLibraryIcon style={{ marginRight: '8px', color: '#FF6F00' }} />
            Resources
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <ExitToAppIcon style={{ marginRight: '8px', color: '#D32F2F' }} />
            Logout
          </MenuItem>
          </Menu>
  </Toolbar>
</AppBar>

<div style={{ backgroundColor: '#DCDCDC	', padding: '50px 0', textAlign: 'center', fontFamily: 'Arial, sans-serif', color: '#333333' }}>
      <Container>
        <Typography variant="h2" sx={{ mt: 4, mb: 4 }}>
          Apply for Agriculture Loan
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ padding: 3 }}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={loanFormData.fullName}
                onChange={handleLoanFormChange}
                margin="normal"
                variant="outlined"
                sx={{ mb: 2 }}
              />
            <Typography variant="caption" color="error" sx={{ mt: 1, mb: 2 }}>
                {errors.fullName}
              </Typography>
              <TextField
                fullWidth
                label="Contact Number"
                name="contactNumber"
                value={loanFormData.contactNumber}
                onChange={handleLoanFormChange}
                margin="normal"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <Typography variant="caption" color="error" sx={{ mt: 1, mb: 2 }}>
                {errors.contactNumber}
              </Typography>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={loanFormData.email}
                onChange={handleLoanFormChange}
                margin="normal"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <Typography variant="caption" color="error" sx={{ mt: 1, mb: 2 }}>
                {errors.email}
              </Typography>
              <TextField
                fullWidth
                label="Loan Amount (in ₹)"
                name="loanAmount"
                value={loanFormData.loanAmount}
                onChange={handleLoanFormChange}
                margin="normal"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <Typography variant="caption" color="error" sx={{ mt: 1, mb: 2 }}>
                {errors.loanAmount}
              </Typography>
              <TextField
                fullWidth
                label="Purpose of Loan"
                name="purpose"
                value={loanFormData.purpose}
                onChange={handleLoanFormChange}
                margin="normal"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <Typography variant="caption" color="error" sx={{ mt: 1, mb: 2 }}>
                {errors.purpose}
              </Typography>
              <FormControl fullWidth sx={{ mb: 2 }}>
  <InputLabel htmlFor="loanType">Loan Type</InputLabel>
  <Select
    label="Loan Type"
    name="loanType"
    value={loanFormData.loanType}
    onChange={handleLoanFormChange}
    variant="outlined"
  >
    <MenuItem value="agricultural">Agricultural Loan</MenuItem>
    <MenuItem value="equipment">Equipment Loan</MenuItem>
    <MenuItem value="development">Development Loan</MenuItem>
    <MenuItem value="livestock">Livestock Loan</MenuItem>
    <MenuItem value="horticulture">Horticulture Loan</MenuItem>
    {/* Add more loan types as needed */}
  </Select>
</FormControl>
<Typography variant="caption" color="error" sx={{ mt: 1, mb: 2 }}>
                {errors.loanType}
              </Typography>
              <TextField
  select
  fullWidth
  label="Document Type"
  name="documentType"
  value={documentType}
  onChange={handleDocumentTypeChange}
  margin="normal"
  variant="outlined"
  sx={{ mb: 2 }}
>
  <MenuItem value="">Select Document Type</MenuItem>
  <MenuItem value="aadhaar">Aadhaar</MenuItem>
  <MenuItem value="panCard">PAN Card</MenuItem>
  <MenuItem value="drivingLicense">Driving License</MenuItem>
  <MenuItem value="voterId">Voter ID</MenuItem>
  <MenuItem value="passport">Passport</MenuItem>
</TextField>
<Typography variant="caption" color="error" sx={{ mt: 1, mb: 2 }}>
  {errors.documentType}
</Typography>

              <input
  type="file"
  accept=".pdf, .jpg, .jpeg, .png"
  onChange={handleFileUpload}
  style={{ display: 'none' }}
  id="fileInput" // Add this line
/>
              <label htmlFor="fileInput">
  <Button
    variant="outlined"
    color="primary"
    component="span"
    sx={{ mb: 2 }}
  >
    Upload Document
  </Button>

<Typography variant="caption" color="error" sx={{ mt: 1, mb: 2 }}>
  {errors.fileUpload}
</Typography>
</label>


              <br></br>
              <FormControlLabel
  control={
    <Checkbox
      checked={agreementChecked}
      onChange={handleAgreementChange}
      color="primary"
    />
  }
  label="I agree to the terms and conditions"
  sx={{ mb: 2 }} // Adjust the margin as needed
/>
<br></br>
              {/* Submit Button */}
               <Grid container justifyContent="center"> {/* Add justifyContent="center" */}
        <Button
          variant="contained"
          color="primary"
          endIcon={<ArrowForwardIcon />}
          onClick={handleLoanFormSubmit}
        >
          Submit Application
        </Button>
      </Grid>
            </Paper>
          </Grid>

          {/* Confirmation Page */}
          {activeStep === 2 && (
  <Grid item xs={12} md={6}>
    <Paper elevation={3} sx={{ padding: 3 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Application Confirmation
      </Typography>
      {confirmationData && (
        <div>
          <Typography variant="body1" sx={{ mb: 2, textAlign: 'left' }}>
            <strong> Application ID:</strong> {applicationId}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, textAlign: 'left' }}>
            <strong>Full Name:</strong> {confirmationData.fullName}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, textAlign: 'left' }}>
            <strong>Contact Number:</strong>{' '}
            {confirmationData.contactNumber}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, textAlign: 'left' }}>
            <strong>Email:</strong> {confirmationData.email}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, textAlign: 'left' }}>
            <strong>Loan Amount:</strong>{' '}
            {confirmationData.loanAmount}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, textAlign: 'left' }}>
            <strong>Purpose:</strong> {confirmationData.purpose}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, textAlign: 'left' }}>
            <strong>Loan Type:</strong> {confirmationData.loanType}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, textAlign: 'left' }}>
                  <strong>Document Type:</strong> {confirmationData.documentType}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, textAlign: 'left' }}>
                  <strong>Document Upload:</strong> {confirmationData.file.name}
                </Typography>
        </div>
      )}
    </Paper>
  </Grid>
)}

        </Grid>
      </Container>
    </div>
    </div>
  );
};

export default LoanApply;
