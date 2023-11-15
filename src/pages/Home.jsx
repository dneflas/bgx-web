import DownloadBtn from "../components/DownloadBtn";
import logoIcon from "../assets/images/logo.png";
import emp1 from "../assets/images/emp-1.svg";
import emp2 from "../assets/images/emp-2.svg";
import emp3 from "../assets/images/emp-3.svg";
import emp4 from "../assets/images/emp-4.svg";
import phoneMockup from "../assets/images/iphone-mockup.png";
import onlineSelling from "../assets/images/online-selling.png";
import { Link } from "react-router-dom";

const Home = () => {
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );
  return (
    <>
      <section id="hero" className="">
        <div className="">
          <div className="flex-row justify-center">
            <img src={logoIcon} alt="Red outline of box with gear inside" />
          </div>
          <h1 className="page-title">Built by parents, for parents.</h1>
          <p className="text-center mx-5 px-5">
            I'm baby palo santo selfies narwhal, banh mi coloring book
            williamsburg art party blackbird spyplane hoodie single-origin
            coffee messenger bag hella post-ironic glossier. Bruh artisan
            drinking vinegar taxidermy vinyl waistcoat quinoa. Mlkshk synth
            ennui tacos deep v pabst crucifix, schlitz wolf selfies fixie
            microdosing cold-pressed try-hard.
          </p>
          <div className="text-center">
            <DownloadBtn className="my-auto" />
          </div>
        </div>
      </section>
      <section className="about py-5 text-light">
        <div className="text-center mx-5 px-5">
          <h1 className="page-title">About Bubs</h1>

          <div className="flex-row justify-space-between">
            <p className="col-6 py-5">
              Art party roof party butcher single-origin coffee gluten-free
              offal. Banh mi palo santo mlkshk, yuccie master cleanse normcore
              williamsburg cred DIY quinoa tousled crucifix bitters cornhole
              retro. Direct trade whatever fam marfa solarpunk microdosing.
              Pour-over yuccie taiyaki tattooed, narwhal readymade edison bulb
              tacos +1 retro umami swag.
              <br />
              Polaroid yes plz before they sold out umami. Viral bitters
              typewriter before they sold out selfies green juice lumbersexual
              roof party cardigan schlitz you probably haven't heard of them raw
              denim raclette pabst blackbird spyplane. Unicorn mumblecore art
              party meggings jean shorts, blackbird spyplane semiotics iceland
              heirloom hashtag. Bushwick lo-fi fixie, farm-to-table letterpress
              pop-up hella etsy literally 8-bit leggings kitsch whatever.
            </p>
            <img
              className="grow col-4"
              src={phoneMockup}
              alt="bubs app mockup"
              width="500px"
            />
          </div>
          <div className="flex-row justify-space-between">
            <img
              className="grow col-5"
              src={onlineSelling}
              alt="bubs app mockup"
              width="600px"
            />
            <p className="col-5 py-5">
              Art party roof party butcher single-origin coffee gluten-free
              offal. Banh mi palo santo mlkshk, yuccie master cleanse normcore
              williamsburg cred DIY quinoa tousled crucifix bitters cornhole
              retro. Direct trade whatever fam marfa solarpunk microdosing.
              Pour-over yuccie taiyaki tattooed, narwhal readymade edison bulb
              tacos +1 retro umami swag.
              <br />
              Polaroid yes plz before they sold out umami. Viral bitters
              typewriter before they sold out selfies green juice lumbersexual
              roof party cardigan schlitz you probably haven't heard of them raw
              denim raclette pabst blackbird spyplane. Unicorn mumblecore art
              party meggings jean shorts, blackbird spyplane semiotics iceland
              heirloom hashtag. Bushwick lo-fi fixie, farm-to-table letterpress
              pop-up hella etsy literally 8-bit leggings kitsch whatever.
            </p>
          </div>
          <div>
            <Link to="/bgx-web/about">
              <button className="btn">learn more</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="team py-5 ">
        <div className="text-center mx-5 px-5">
          <h1 className="page-title text-light">Meet The Team</h1>
        </div>
        <div className="flex-row justify-space-around py-5">
          <img src={emp1} className="emp-avatar" alt="avatar of employee" />
          <img src={emp2} className="emp-avatar" alt="avatar of employee" />
          <img src={emp3} className="emp-avatar" alt="avatar of employee" />
          <img src={emp4} className="emp-avatar" alt="avatar of employee" />
        </div>
        <div className="flex-row justify-center">
          <Link to="/bgx-web/team">
            <button className="btn-secondary">learn more</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
