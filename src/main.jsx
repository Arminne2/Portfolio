import { StrictMode } from "react";
import { useState, createContext, useContext } from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Projects from "./pages/projects/Projects.jsx";
import Layout from "./pages/Layout/index.jsx";
import Error from "./pages/error/Error.jsx";
import Project from "./pages/Project/Project.jsx";
import Header from "./components/header/Header.jsx";
import Presentation from "./components/Presentation/Presentation.jsx";
import Broccoli from "./pages/Brocoli/Broccoli.jsx";
import Footer from "./components/Footer/Footer.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
        <Header/>
      <Routes>
          <Route path="/" element={<Presentation />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/broccoli" element={<Broccoli />}/>
          <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </Router>
  </StrictMode>,
);
