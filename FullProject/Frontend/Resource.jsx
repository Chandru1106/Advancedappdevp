
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardActions } from '@mui/material';


const ResourcePage = () => {
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#2E7D32', width: '208.2vh' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
          <Button color="inherit" component={Link} to="/Profile">
            Your Profile
          </Button>
        </Toolbar>
      </AppBar>

      <div style={{ backgroundColor: '#DCDCDC', padding: '50px 0', textAlign: 'center', fontFamily: 'Arial, sans-serif', color: '#333333' }}>
        <Container>
          <Typography variant="h3" sx={{ mb: 4, color: '#333333' }}>
            Agriculture Loan Resources
          </Typography>

          <Grid container spacing={4}>
            {/* Article 1 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    5 Tips for Maximizing Your Agricultural Loan
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Explore strategies to make the most out of your agricultural loan. Learn about efficient fund utilization and financial planning.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" component={Link} to="/articles/1">
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Article 2 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Sustainable Farming Practices: A Guide
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Discover sustainable farming techniques and how they can positively impact your agricultural business.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" component={Link} to="/articles/2">
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Article 3 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Budgeting Tips for Small Farms: Best Guide
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Learn effective budgeting strategies specifically tailored for small-scale farmers.Used for Agriculture process.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" component={Link} to="/articles/3">
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Video 1 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Financial Planning for Farmers (Video)
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Watch this video to understand the importance of financial planning in the agricultural sector.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" component={Link} to="/videos/1">
                    Watch Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Video 2 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Modern Irrigation Techniques (Video)
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Explore advanced irrigation methods and their impact on crop yield. Watch now!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" component={Link} to="/videos/2">
                    Watch Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Video 3 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Importance of Agriculture Soil Health (Video)
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Learn about the significance of soil health in sustainable agriculture practices.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" component={Link} to="/videos/3">
                    Watch Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Tool 1 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Loan Calculator Tool
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Use our loan calculator to estimate monthly payments and plan your budget effectively.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" component={Link} to="/tools/1">
                    Access Tool
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Tool 2 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Crop Rotation Planner
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Plan your crop rotation schedule efficiently with our interactive tool.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" component={Link} to="/tools/2">
                    Access Tool
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Tool 3 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Farm Budgeting Spreadsheet
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Download our farm budgeting spreadsheet template to organize your finances.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" component={Link} to="/tools/3">
                    Access Tool
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default ResourcePage;
