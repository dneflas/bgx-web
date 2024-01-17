import { Link } from "react-router-dom";

const Navbar = ({ currentSection, setCurrentSection }) => {
  return (
    <nav>
      <a
        className={`ml-2 my-1 px-2 mx-5 py-1 text-dark ${
          currentSection === "about" && "nav-active"
        }`}
        onClick={() => setCurrentSection("about")}
        href="#about"
      >
        About
      </a>
      <a
        className={`ml-2 my-1 px-2 mx-5 py-1 text-dark ${
          currentSection === "team" && "nav-active"
        }`}
        onClick={() => setCurrentSection("team")}
        href="#team"
      >
        Team
      </a>
    </nav>
  );
};

export default Navbar;
