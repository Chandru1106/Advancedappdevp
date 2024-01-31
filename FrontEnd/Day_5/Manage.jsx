import  { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
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
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';

import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';

const ManageLoans = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loanApplications, setLoanApplications] = useState([]);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const fetchLoanApplications = () => {
    // Replace this with actual API call to fetch loan applications
    // Example: fetchLoanApplications().then(applications => setLoanApplications(applications));

    // Simulated data for demonstration
    const simulatedLoanApplications = [
      { id: 1, fullName: 'John Doe', status: 'Pending' },
      { id: 2, fullName: 'Jane Doe', status: 'Pending' },
      { id: 3, fullName: 'Bob Smith', status: 'Approved' },
    ];

    setLoanApplications(simulatedLoanApplications);
  };

  useEffect(() => {
    fetchLoanApplications();
  }, []);

  const handleApprove = (applicationId) => {
    // Replace this with actual API call to approve the loan application
    // Example: approveLoanApplication(applicationId).then(() => fetchLoanApplications());

    // Simulated data for demonstration
    alert(`Loan application ${applicationId} approved!`);
    fetchLoanApplications();
  };

  const handleReject = (applicationId) => {
    // Replace this with actual API call to reject the loan application
    // Example: rejectLoanApplication(applicationId).then(() => fetchLoanApplications());

    // Simulated data for demonstration
    alert(`Loan application ${applicationId} rejected!`);
    fetchLoanApplications();
  };

  return (
    <div>
      <AppBar position="static" sx={{marginTop: '-275px', backgroundColor: '#2E7D32', width: '208.2vh' }}>
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

      <div style={{ padding: '20px', backgroundColor: '#DCDCDC', fontFamily: 'Arial, sans-serif', color: '#333333' }}>
        <Typography variant="h2" sx={{ mb: 4 }}>
          Manage Loans
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Applicant Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loanApplications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell>{application.id}</TableCell>
                  <TableCell>{application.fullName}</TableCell>
                  <TableCell>{application.status}</TableCell>
                  <TableCell>
                    {application.status === 'Pending' && (
                      <>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleApprove(application.id)}
                        >
                          Approve
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => handleReject(application.id)}
                          sx={{ ml: 1 }}
                        >
                          Reject
                        </Button>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ManageLoans;
