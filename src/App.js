import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Blog from "./components/Blog";
import Portfolio from "./components/Portfolio";
import NotFound from "./components/NotFound";
import Gallery from "./components/Gallery";

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="container-fluid">
					<Router>
					<Header />
					<NavBar/>
						<Routes>
							<Route index path='/' element={<Home />} />
							<Route exact path='/about' element={<About />} />
							<Route exact path='/blog' element={<Blog />} />
							<Route exact path='/contact' element={<Contact />} />
							<Route exact path='/portfolio' element={<Portfolio />} />
							<Route exact path='/gallery' element={<Gallery />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
						<Footer />
					</Router>
				</div>
			</div>
		);
	}
}
