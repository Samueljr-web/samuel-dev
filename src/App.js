import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/404";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <div>
        {isLoading ? (
          <div className="loading">
            <div className="loader1"></div>
            <div className="loader2"></div>
          </div>
        ) : (
          <div>
            <Router>
              <Navbar loader={isLoading} />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="*" element={<NotFound />}></Route>
              </Routes>
            </Router>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
