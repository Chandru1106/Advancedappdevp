import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
import axios from 'axios';


const ManagePage = () => {
  const [loanApplications, setLoanApplications] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const fetchLoanApplications = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/loan/applications', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setLoanApplications(response.data);
      } catch (error) {
        console.error('Error fetching loan applications:', error);
      }
    };

    if (token) {
      fetchLoanApplications();
    }
  }, [token]);

  const handleApprove = async (id) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('JWT token not found.');
        return;
      }

      const response = await fetch(`http://localhost:8080/api/loan/update/${id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: 'Approved' }) // Send only the status field
      });

      if (response.ok) {
        console.log(`Loan application ${id} approved successfully.`);
        // Update the loan application status locally if needed
      } else {
        console.error(`Failed to approve loan application ${id}.`);
      }
    } catch (error) {
      console.error('Error approving loan application:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('JWT token not found.');
        return;
      }

      const response = await fetch(`http://localhost:8080/api/loan/update/${id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: 'Rejected' }) // Send only the status field
      });

      if (response.ok) {
        console.log(`Loan application ${id} rejected successfully.`);
        // Update the loan application status locally if needed
      } else {
        console.error(`Failed to reject loan application ${id}.`);
      }
    } catch (error) {
      console.error('Error rejecting loan application:', error);
    }
  };
  

  return (
    <div>
      <AppBar position="static" sx={{  backgroundColor: '#2E7D32', width: '208.2vh' }}>
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
            <MenuItem component={Link} to="/Profile" onClick={handleMenuClose}>
              <PersonIcon style={{ marginRight: '8px', color: '#1E88E5' }} />
              Your Profile
            </MenuItem>
            <MenuItem component={Link} to="/Resources" onClick={handleMenuClose}>
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

      <div style={{ padding: '20px', backgroundColor: '#DCDCDC', fontFamily: 'Arial, sans-serif', color: '#333333' }}>
        <Typography variant="h2" sx={{ mb: 4 }}>
          Manage Loans
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Full Name</TableCell>
                <TableCell>Contact Number</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Loan Amount</TableCell>
                <TableCell>Purpose</TableCell>
                <TableCell>Loan Type</TableCell>
                <TableCell>Document Type</TableCell>
                <TableCell>File</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loanApplications.map((application) => (
                <TableRow key={application.applicationId}>
                  <TableCell>{application.applicationId}</TableCell>
                  <TableCell>{application.fullName}</TableCell>
                  <TableCell>{application.contactNumber}</TableCell>
                  <TableCell>{application.email}</TableCell>
                  <TableCell>{application.loanAmount}</TableCell>
                  <TableCell>{application.purpose}</TableCell>
                  <TableCell>{application.loanType}</TableCell>
                  <TableCell>{application.documentType}</TableCell>
                  <TableCell>{application.file}</TableCell>
                  <TableCell>
                    {application.status ? (
                      <Typography variant="body1" color={application.status === 'Approved' ? 'success' : 'error'}>
                        {application.status}
                      </Typography>
                    ) : (
                      <>
                        <Button variant="contained" style={{ backgroundColor: '#4CAF50', color: '#FFFFFF' }} onClick={() => handleApprove(application.applicationId)}>Approve</Button>
                        <Button variant="contained" style={{ backgroundColor: '#F44336', color: '#FFFFFF', marginLeft: '10px' }} onClick={() => handleReject(application.applicationId)}>Reject</Button>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div style={{ marginTop: '40px', backgroundColor: '#FFF', padding: '20px', borderRadius: '5px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
    <Typography variant="h4" sx={{ mb: 2, color: '#2E7D32' }}>Criteria to Approve:</Typography>
    <Typography variant="body1">
      - Must have a loan amount above 30000 <br />
      - Stable employment history <br />
      - Adequate income to support loan repayment <br />
      - Proper documentation submitted
    </Typography>
  </div>

  <div style={{ marginTop: '40px', backgroundColor: '#FFF', padding: '20px', borderRadius: '5px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
    <Typography variant="h4" sx={{ mb: 2, color: '#D32F2F' }}>Criteria to Reject:</Typography>
    <Typography variant="body1">
      - Poor loan amount <br />
      - Unstable employment history <br />
      - Insufficient income to support loan repayment <br />
      - Incomplete or inaccurate documentation
    </Typography>
  </div>
      </div>
      
    </div>
  );
};

export default ManagePage;
