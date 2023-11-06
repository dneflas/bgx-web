import { Link } from "react-router-dom";

const Navbar = ({ currentSection, setCurrentSection }) => {
  return (
    <nav className="">
      <Link
        className={`ml-2 my-1 px-2 mx-5 py-1 text-dark ${
          currentSection === "about" && "nav-active"
        }`}
        onClick={() => setCurrentSection("about")}
        to="/bgx-web/about"
      >
        About
      </Link>
      <Link
        className={`ml-2 my-1 px-2 mx-5 py-1 text-dark ${
          currentSection === "team" && "nav-active"
        }`}
        onClick={() => setCurrentSection("team")}
        to="/bgx-web/team"
      >
        Team
      </Link>
    </nav>
  );
};

export default Navbar;
