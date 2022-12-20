import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../assets/styles/NavBar.css";
import logo from "../assets/images/gkb_50x50.png";
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

class NavBar extends React.Component {
	render() {
		return (
			<nav
				className="Navbar"
			>
				<div className="container container-fluid">
					<div className="Navbar-header">
					<img className='Navbar-logo' src="../assets/images/gkb_50x50.png"></img>
						<a className="Navbar-brand" href="#">
							Greg Bowne
						</a>
					</div>
					<div className="">
						<ul className="">
							<li>
							<Link to="/" className="Navbar-link">
          						<Button>Home</Button>
        					</Link>
							</li>
							<li>
							<Link to="/about" className="Navbar-link">
          						<Button>About</Button>
        					</Link>
							</li>
							<li>
							<Link to="/gallery" className="Navbar-link">
          						<Button>Gallery</Button>
        					</Link>
							</li>
							<li>
							<Link to="/blog" className="Navbar-link">
          						<Button>Blog</Button>
        					</Link>
							</li>
							<li>
							<Link to="/contact" className="Navbar-link">
          						<Button>Contact</Button>
        					</Link>
							</li>
							<TextField
                                name="search"
                                floatingLabelText="Search"
                                value={this.state.query}
                                onChange={this.searchChange}
                                floatingLabelFixed
                            />
              				<IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        						<SearchIcon />
      						</IconButton>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default NavBar;
