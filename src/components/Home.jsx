import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import "../assets/styles/Home.css"; // Ensure your custom styles are applied
import BlogIcon from "@mui/icons-material/Book";

const Home = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    // Simulate fetching featured posts from an API
    const posts = [
      {
        title: "Introduction to React Hooks",
        date: "2023-04-01",
        summary: "Learn how to use React Hooks effectively.",
      },
      {
        title: "Building a Responsive Web Design",
        date: "2023-03-15",
        summary:
          "Master the art of designing websites that adapt to any screen size.",
      },
      // Add more posts as needed
    ];
    setFeaturedPosts(posts);
  }, []);

  return (
    <div className="Home-container">
      <main>
        <section className="intro-section">
          <Container maxWidth="lg">
            <Typography variant="h2" gutterBottom align="center">
              Welcome to My Portfolio &amp; Blog
            </Typography>
            <Typography variant="subtitle1" align="center">
              Dive into my world of coding, projects, and thoughts.
            </Typography>
          </Container>
        </section>

        <section className="featured-posts">
          <Container maxWidth="lg">
            <Typography variant="h3" gutterBottom align="center">
              Featured Blog Posts
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 2,
              }}
            >
              {featuredPosts.map((post) => (
                <Paper elevation={2} key={post.title} sx={{ p: 2 }}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5">{post.title}</Typography>
                      <Typography variant="body2">{post.date}</Typography>
                      <Typography variant="body1">{post.summary}</Typography>
                    </CardContent>
                    <IconButton
                      component={Link}
                      to={`/blog/${post.title}`}
                      aria-label={`Read ${post.title}`}
                    >
                      <BlogIcon />
                    </IconButton>
                  </Card>
                </Paper>
              ))}
            </Box>
          </Container>
        </section>

        <section className="call-to-action">
          <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom align="center">
              Connect with me!
            </Typography>
            <Typography variant="body1" align="center">
              Reach out to me via the contact form or send an email directly.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/contact"
            >
              Contact Me
            </Button>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default Home;
