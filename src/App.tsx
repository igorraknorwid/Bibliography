import React from "react";
import { Routes, Route } from "react-router-dom";
import Bibliography from "./pages/Bibliograohy";
import { Layout } from "./components/Layout/Layout";
import Navigation from "./pages/Navigation";
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Navigation />} />
          <Route path='/:year' element={<Bibliography />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
