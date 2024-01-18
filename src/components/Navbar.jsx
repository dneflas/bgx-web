const Navbar = ({ currentSection, setCurrentSection }) => {
  const handleLinkClick = (id) => {
    setCurrentSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 60; // Adjust the offset based on your navbar's height
      const offsetPosition = element.offsetTop - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav>
      <a
        className={`ml-2 my-1 px-2 mx-5 py-1 text-dark ${
          currentSection === "about" && "nav-active"
        }`}
        onClick={() => handleLinkClick("about")}
      >
        About
      </a>
      <a
        className={`ml-2 my-1 px-2 mx-5 py-1 text-dark ${
          currentSection === "team" && "nav-active"
        }`}
        onClick={() => handleLinkClick("team")}
      >
        Team
      </a>
    </nav>
  );
};

export default Navbar;
