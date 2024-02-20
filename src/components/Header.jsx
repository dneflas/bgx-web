import logo from "../assets/images/bubs-logo.png";
import Navbar from "./Navbar";
import DownloadBtn from "./DownloadBtn";
import { Link } from "react-router-dom";

const Header = ({ currentSection, setCurrentSection }) => {
  return (
    <header className=" flex-row justify-space-between align-center pt-3">
      <div className="flex-row col-12 col-md-10">
        <Link to="/bgx-web/" className="col-2">
          <img src={logo} alt="bgx logo" width="200" />
        </Link>
        <Navbar
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          className="col-4"
        />
      </div>
      <div className="flex-row col-12 col-md-2 justify-center">
        <DownloadBtn className="col-12" />
      </div>
    </header>
  );
};

export default Header;
