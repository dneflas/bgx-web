const Navbar = ({
  currentSection,
  setCurrentSection,
  headerHeight,
  mobileScreenWidth,
}) => {
  const handleLinkClick = (id) => {
    setCurrentSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = headerHeight;
      const offsetPosition = element.offsetTop - offset;

      window.scrollTo({
        top: offsetPosition,
      });
    }
  };

  return (
    <nav
      className={`flex-row col-6 col-md-6 justify-space-around text-dark ${
        !mobileScreenWidth && "mt-4"
      }`}
    >
      <a
        className={`ml-2 my-1 px-2 py-1  ${
          currentSection === "about" && "nav-active"
        }`}
        onClick={() => handleLinkClick("about")}
      >
        About
      </a>
      <a
        className={`ml-2 my-1 px-2 py-1  ${
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
