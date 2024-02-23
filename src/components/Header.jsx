import { useRef, useState, useEffect } from "react";
import logo from "../assets/images/bubs-logo.png";
import Navbar from "./Navbar";
import DownloadBtn from "./DownloadBtn";
import { Link } from "react-router-dom";

const Header = ({ currentSection, setCurrentSection }) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [mobileScreenWidth, setMobileScreenWidth] = useState(false);
  const elementRef = useRef(null);

  // set the header height for offset in navigation
  useEffect(() => {
    if (elementRef.current) {
      console.log(elementRef.current.clientHeight);
      setHeaderHeight(elementRef.current.clientHeight);
    }
  }, [elementRef]);

  // set the screen width when page is resized
  useEffect(() => {
    if (window.innerWidth < 640) setMobileScreenWidth(true);
    const handleResize = () => {
      if (window.innerWidth < 640) setMobileScreenWidth(true);
      else setMobileScreenWidth(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className=" flex-row justify-space-between align-center pt-3"
      ref={elementRef}
    >
      <div
        className={`flex-row col-12 col-sm-9 ${
          mobileScreenWidth && "justify-space-around"
        }`}
      >
        <Link to="/bgx-web/" className="col-2">
          <img
            src={logo}
            alt="bgx logo"
            width={mobileScreenWidth ? "100" : "200"}
          />
        </Link>
        <Navbar
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          headerHeight={headerHeight}
          mobileScreenWidth={mobileScreenWidth}
        />
      </div>
      <div className="flex-row col-12 col-sm-3 justify-center">
        <DownloadBtn className="col-12" />
      </div>
    </header>
  );
};

export default Header;
