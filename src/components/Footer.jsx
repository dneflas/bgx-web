import logoIcon from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="flex-row justify-center py-2">
      <a href="#">
        <img src={logoIcon} alt="Bubs icon" width="50px" />
      </a>
    </footer>
  );
};

export default Footer;
