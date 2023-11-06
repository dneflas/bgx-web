import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import "./App.css";

function App() {
  const initialSection = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const [currentSection, setCurrentSection] = useState(initialSection);
  useEffect(() => {
    document.title = `Bubs App | ${currentSection}`;
  });
  return (
    <>
      <Header
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Home />
    </>
  );
}

export default App;
