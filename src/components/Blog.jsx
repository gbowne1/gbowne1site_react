import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Box, Button, IconButton, Pagination, Typography, TextField, Breadcrumbs } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

export default function Blog() {
  const location = useLocation();
  const navigate = useNavigate();
  const { slug } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [comment, setComment] = useState('');
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  useEffect(() => {
    // Fetch blogs from local JSON server
    fetch('http://localhost:3000/blog')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.log(error));
  }, []);

  // Get current posts based on pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    navigate(`/blog/page/\${value}`);
  };

  // Handle form submission for comments
  const handleSubmit = event => {
    event.preventDefault();
    console.log(comment);
    setComment('');
  };

  return (
    <Box maxWidth={1884} mx="auto" pt={8}>
      <Breadcrumbs>
        <Typography color="textPrimary">Home</Typography>
        <Typography color="textPrimary">Blog</Typography>
        <Typography color="textPrimary">{slug}</Typography>
      </Breadcrumbs>
      {currentPosts.map(blog => (
        <Box key={blog.id} my={4}>
          <Typography variant="h4" gutterBottom>{blog.title}</Typography>
          <Typography variant="body1">{blog.body}</Typography>
          <Box display="flex" alignItems="center" mt={2}>
            <IconButton color="primary" onClick={() => setLikes(likes + 1)}>
              <ThumbUpIcon />
            </IconButton>
            <Typography>{likes}</Typography>
            <IconButton color="primary" onClick={() => setDislikes(dislikes + 1)}>
              <ThumbDownIcon />
            </IconButton>
            <Typography>{dislikes}</Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <TextField
              id="comment"
              name="comment"
              value={comment}
              onChange={event => setComment(event.target.value)}
              label="Leave a comment"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" type="submit">Submit</Button>
          </form>
        </Box>
      ))}
      <Box display="flex" justifyContent="center">
        <Pagination count={Math.ceil(blogs.length / postsPerPage)} page={currentPage} onChange={handlePageChange} />
      </Box>
    </Box>
  );
}
