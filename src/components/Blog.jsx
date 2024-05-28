import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Paper,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" gutterBottom align="center">
        Blog Posts
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {posts.map((post) => (
          <Paper elevation={2} key={post.id} sx={{ p: 2 }}>
            <Card>
              <CardContent>
                <Typography variant="h5">{post.title}</Typography>
                <Typography variant="body2">
                  {new Date(post.date_published).toLocaleDateString()}
                </Typography>
                <Typography variant="body1">{post.excerpt}</Typography>
              </CardContent>
              <Button
                component={Link}
                to={`/blog/${post.slug}`}
                variant="contained"
                color="primary"
              >
                Read More
              </Button>
            </Card>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default Blog;
