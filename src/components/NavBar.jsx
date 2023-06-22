import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/NavBar.css";
import logo from "../assets/images/gkb_50x50.png";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

function NavBar() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <nav className="Navbar">
      <div className="container container-fluid">
        <div className="Navbar-header">
          <img className="Navbar-logo" src={logo}></img>
          <a className="Navbar-brand" href="#">
            Greg Bowne
          </a>
        </div>
        <div className="containerSmall">
          <ul className="">
            <li>
              <Link to="/">
                <Button className="Navbar-link">Home</Button>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <Button className="Navbar-link">About</Button>
              </Link>
            </li>
            <li>
              <Link to="/gallery">
                <Button className="Navbar-link">Gallery</Button>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <Button className="Navbar-link">Blog</Button>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <Button className="Navbar-link">Contact</Button>
              </Link>
            </li>
            <TextField
              name="search"
              label="Search"
              value={searchValue}
              onChange={handleSearchChange}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
