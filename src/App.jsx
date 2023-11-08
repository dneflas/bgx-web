import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const initialSection = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const [currentSection, setCurrentSection] = useState(initialSection);
  useEffect(() => {
    if (currentSection === "") {
      document.title = "Bubs App";
    } else {
      document.title = `Bubs App | ${currentSection}`;
    }
  });
  return (
    <>
      <Header
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
