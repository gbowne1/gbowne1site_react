import { Paper, Container, Box, Typography, Grid } from "@mui/material";
import profilePic from "../assets/images/me.jpg";
const About = () => {
  return (
    <section className="About-container">
      <header className="About-header">
        <h1>About Me</h1>
      </header>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={2} className="bio-section">
              <Box padding={2}>
                <img
                  src={profilePic}
                  alt="Headshot of Gregory Bowne"
                  style={{ width: "15%" }}
                />
                <Typography variant="body1">
                  Hi there My name is Gregory Bowne aka gbowne1.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={2} className="businesses-section">
              <Box padding={2}>
                <Typography variant="h6">Businesses</Typography>
                <ul>
                  <li>
                    <strong>Workshop Ownership:</strong> Owns a machine and
                    fabrication/engineering workshop with ~250 employees (as of
                    4/30/2021).
                  </li>
                </ul>
              </Box>
            </Paper>
          </Grid>
          {/* Add other sections similarly */}
        </Grid>
      </Container>
    </section>
  );
};

export default About;
