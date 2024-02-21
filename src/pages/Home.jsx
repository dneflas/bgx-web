import DownloadBtn from "../components/DownloadBtn";
import logoIcon from "../assets/images/logo.png";
import emp1 from "../assets/images/emp-1.png";
import emp2 from "../assets/images/emp-1.png";
import emp3 from "../assets/images/emp-3.svg";
import emp4 from "../assets/images/emp-4.svg";
import phoneMockup from "../assets/images/iphone-mockup-logo.png";
import onlineSelling from "../assets/images/online-selling.png";
import SignUpForm from "../components/SignupForm";

const Home = () => {
  const employees = [
    {
      name: "David Ninobla",
      img: emp1,
    },
    {
      name: "Debbie Neflas",
      img: emp2,
    },
  ];
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
        <div className="text-light mx-4">
          <div className="flex-row justify-flex-start">
            <img
              src={logoIcon}
              alt="Red outline of box with gear inside"
              className="col-12 col-sm-2"
            />
          </div>
          <h1 className="page-title">Built by parents, for parents.</h1>
          <p className="">
            I'm baby palo santo selfies narwhal, banh mi coloring book
            williamsburg art party blackbird spyplane hoodie single-origin
            coffee messenger bag hella post-ironic glossier. Bruh artisan
            drinking vinegar taxidermy vinyl waistcoat quinoa. Mlkshk synth
            ennui tacos deep v pabst crucifix, schlitz wolf selfies fixie
            microdosing cold-pressed try-hard.
          </p>
          <div className=" ml-5">
            <DownloadBtn className="my-auto" />
          </div>
        </div>
      </section>
      <section id="about" className="about py-5 px-4 text-light">
        <div className="text-center flex-row">
          <h1 className="page-title col-12">About Bubs</h1>

          <div className="flex-row justify-space-between">
            <p className="col-12 col-lg-6 my-5">
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
              className="grow col-12 col-lg-4"
              src={phoneMockup}
              alt="bubs app mockup"
            />
          </div>
          <div className="flex-row justify-space-between">
            <img
              className="grow col-12 col-lg-6"
              src={onlineSelling}
              alt="bubs app mockup"
            />
            <p className="col-12 col-lg-5 my-5">
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
        </div>
      </section>
      <section id="team" className="team py-5 px-4">
        <div className="text-center flex-row">
          <h1 className="page-title text-light col-12">Meet The Team</h1>
        </div>
        <div className="flex-row justify-center py-5">
          {employees.map((emp) => (
            <img
              key={emp.name}
              src={emp.img}
              className="emp-avatar col-4 col-md-2 m-5 "
              alt={`Avatar or ${emp.name}`}
            />
          ))}
        </div>
      </section>
      <section id="signup" className="signup py-5">
        <div className="text-center flex-row justify-center text-light">
          <h1 className="page-title col-12">Sign Up</h1>
          <p className="col-10">
            Be the first to know when our beta launches! Sign up now to receive
            updates and exclusive access to our innovative platform.
          </p>
        </div>
        <SignUpForm />
      </section>
    </>
  );
};

export default Home;
