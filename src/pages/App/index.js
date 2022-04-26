import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Home";
import Quiz from "../Quiz";
import Navbar from "../../components/Navbar";
import css from "./style.module.css";
import Article from "../Article";
import Post1 from "../Post-1";

function App() {
  return (
    <div className={css.App}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/Article/post1" element={<Post1 />} />
      </Routes>
    </div>
  );
}

export default App;
