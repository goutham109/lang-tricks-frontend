import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header/Header";
import BodySection from "./BodySection/BodySection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cpp from "./LangComponents/Cpp";
import Java from "./LangComponents/Java";
import Javascript from "./LangComponents/Javascript";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<BodySection />} />
          <Route path="/C++" element={<Cpp />} />
          <Route path="/Java" element={<Java />} />
          <Route path="/Javascript" element={<Javascript />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
