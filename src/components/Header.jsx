import logo from "../assets/images/bubs-logo.png";
import Navbar from "./Navbar";
import DownloadBtn from "./DownloadBtn";

const Header = ({ currentSection, setCurrentSection }) => {
  return (
    <header className=" flex-row justify-space-between align-center pt-3">
      <div className="flex-row">
        <img src={logo} alt="bgx logo" width="200" />
        <Navbar
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
      </div>
      <DownloadBtn />
    </header>
  );
};

export default Header;
