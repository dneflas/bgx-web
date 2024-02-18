import logoIcon from "../assets/images/logo.png";
import twitterIcon from "../assets/images/x-twitter.svg";
import instagramIcon from "../assets/images/instagram.svg";

const socialIcons = [
  {
    icon: twitterIcon,
    alt: "Twitter bird logo",
    link: "https://twitter.com/hellobubs_app",
  },
  { icon: logoIcon, alt: "Bubs icon", link: "#" },

  {
    icon: instagramIcon,
    alt: "Instagram camera logo",
    link: "https://www.instagram.com/hellobubs.app/",
  },
];

const Footer = () => {
  return (
    <footer className="flex-row justify-flex-end mx-4 py-2 ">
      {socialIcons.map((social) => (
        <a
          href={social.link}
          target="_blank"
          key={social.link}
          className="mx-2"
        >
          <img src={social.icon} alt={social.alt} width="30px" />
        </a>
      ))}
    </footer>
  );
};

export default Footer;
