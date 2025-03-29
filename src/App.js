import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import CookieBar from "./components/CookieBar";
import BlogEditor from "./components/BlogEditor";

function App() {
  const [showCookieBar, setShowCookieBar] = useState(true);

  return (
    <div className="App">
      <div className="container-fluid app-route-container">
        <Router>
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/editor" element={<BlogEditor />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {showCookieBar && <CookieBar setShowCookieBar={setShowCookieBar} />}
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
