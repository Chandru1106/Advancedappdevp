
import { Container, Typography, TextField, Button } from '@mui/material';

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h3" sx={{ mb: 4 }}>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" size="large">
          Send Message
        </Button>
      </form>
    </Container>
  );
};

export default ContactPage;
