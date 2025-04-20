import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import HomePage from "./pages/HomePage";
import ShowPage from "./pages/ShowPage";
import ConfigPage from "./pages/ConfigPage";

const App: React.FC = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/show/:id" element={<ShowPage />} />
      <Route path="/config" element={<ConfigPage />} />
    </Routes>
  </Router>
);

export default App;
