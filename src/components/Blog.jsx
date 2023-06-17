import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  Pagination,
  Typography,
  TextField,
  Breadcrumbs,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import "../assets/styles/Blog.css";

export default function Blog() {
  const { slug } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  useEffect(() => {
    // Fetch blogs from local JSON server
    fetch("http://localhost:3000/blog")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log(error));
  }, []);

  // Handle page change in pagination
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  //pagination
  const itemsPerPage = postsPerPage;
  const totalPages = Math.ceil(blogs.length / postsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBlogData = blogs.slice(startIndex, endIndex);
  const maxPages = 5; // Maximum number of pages to display
  const halfMaxPages = Math.floor(maxPages / 2);

  let startPage = 1;
  let endPage = totalPages;

  if (totalPages > maxPages) {
    if (currentPage <= halfMaxPages) {
      endPage = maxPages;
    } else if (currentPage >= totalPages - halfMaxPages) {
      startPage = totalPages - maxPages + 1;
    } else {
      startPage = currentPage - halfMaxPages;
      endPage = currentPage + halfMaxPages;
    }
  }
  const paginationLinks = [];
  for (let i = startPage; i <= endPage; i++) {
    paginationLinks.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={i === currentPage ? "active" : ""}
      >
        {i}
      </button>
    );
  }
  // Handle form submission for comments
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(comment);
    setComment("");
  };

  return (
    <Box maxWidth={1884} mx="auto" pt={8}>
      <Breadcrumbs>
        <Typography color="textPrimary">Home</Typography>
        <Typography color="textPrimary">Blog</Typography>
        <Typography color="textPrimary">{slug}</Typography>
      </Breadcrumbs>
      {currentBlogData.map((blog) => (
        <Box key={blog.id} my={4}>
          <Typography variant="h4" gutterBottom>
            {blog.title}
          </Typography>
          <Typography variant="body1">{blog.body}</Typography>
          <Box display="flex" alignItems="center" mt={2}>
            <IconButton color="primary" onClick={() => setLikes(likes + 1)}>
              <ThumbUpIcon />
            </IconButton>
            <Typography variant="body2">{likes}</Typography>
            <IconButton
              aria-label="dislike"
              color="primary"
              onClick={() => setDislikes(dislikes + 1)}
            >
              <ThumbDownIcon />
            </IconButton>
            <Typography variant="body2">{dislikes}</Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <TextField
              id="comment"
              name="comment"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              label="Leave a comment"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      ))}
      <Box display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(blogs.length / postsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Box>
      <div className="pagination-links">
        <button
          className="prev"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>
        {paginationLinks}
        <button
          className="next"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
        <select
          value={postsPerPage}
          onChange={(event) => setPostsPerPage(Number(event.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>
    </Box>
  );
}
