import { capitalizeFirstLetter } from "../utils/helpers";

const Navbar = ({ headerHeight, mobileScreenWidth }) => {
  const navTabs = ["about", "team"];
  const handleLinkClick = (id) => {
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
      className={`flex-row col-7 col-sm-6 justify-space-around text-dark ${
        !mobileScreenWidth && "mt-4"
      } `}
    >
      {navTabs.map((tab) => (
        <a
          className="ml-3  my-1 py-1"
          key={tab}
          onClick={() => handleLinkClick({ tab })}
        >
          {capitalizeFirstLetter(tab)}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
