import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const initialSection = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
