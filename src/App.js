import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Components/style.css";
import Navbar from "./Components/Navbar";
import SearchAnime from "./Components/SearchAnime";
import Mylist from "./Components/Mylist";
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchAnime/>} />
        <Route path="/mylist" element={<Mylist/>} />
      </Routes>
    </>
  );
}

export default App;
