import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import FirstPage from "./Pages/FisrtPage";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";
import Navbar from "./Pages/Navbar";
import Line from "./Pages/Line";
import Footer from "./Pages/Footer";

function App() {
  return (
    <Router>
      <Line />
      <Navbar />
      <Routes>
        <Route path="/PP-1" element={<FirstPage />} />
        <Route path="/PP-2" element={<SecondPage />} />
        <Route path="/PP-3" element={<ThirdPage />} />
        <Route
          path="/test.html"
          render={() => <iframe src="/test.html" title="Test Page" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
