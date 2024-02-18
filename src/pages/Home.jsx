import DownloadBtn from "../components/DownloadBtn";
import logoIcon from "../assets/images/logo.png";
import emp1 from "../assets/images/emp-1.svg";
import emp2 from "../assets/images/emp-2.svg";
import emp3 from "../assets/images/emp-3.svg";
import emp4 from "../assets/images/emp-4.svg";
import phoneMockup from "../assets/images/iphone-mockup-logo.png";
import onlineSelling from "../assets/images/online-selling.png";
import { Link } from "react-router-dom";
import { useState } from "react";

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

  const [formState, setFormState] = useState({
    Name: "",
    Email: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    var re = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
    return re.test(String(email).toLowerCase());
  };

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "Email") {
      const isValid = validateEmail(value);
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!value.length) {
        setErrorMessage(capitalizeFirstLetter(`${name} is required.`));
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [name]: value });
    }
    console.log(formState);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById("signup-form");
    const data = new FormData(form);
    const action = e.target.action;

    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      console.log(formState);
      // update below alert to success modal, need to clear form as well
      alert("Success!");
      setFormState({
        Name: "",
        Email: "",
      });
      console.log(formState);
    });
  };

  return (
    <>
      <section id="hero" className="">
        <div className="text-light mx-5 pr-5">
          <div className="flex-row justify-flex-end">
            <img src={logoIcon} alt="Red outline of box with gear inside" />
          </div>
          <h1 className="page-title text-right">
            Built by parents, for parents.
          </h1>
          <p className="text-right">
            I'm baby palo santo selfies narwhal, banh mi coloring book
            williamsburg art party blackbird spyplane hoodie single-origin
            coffee messenger bag hella post-ironic glossier. Bruh artisan
            drinking vinegar taxidermy vinyl waistcoat quinoa. Mlkshk synth
            ennui tacos deep v pabst crucifix, schlitz wolf selfies fixie
            microdosing cold-pressed try-hard.
          </p>
          <div className="text-right mr-5">
            <DownloadBtn className="my-auto" />
          </div>
        </div>
      </section>
      <section id="about" className="about py-5 text-light">
        <div className="text-center mx-5 px-5">
          <h1 className="page-title">About Bubs</h1>

          <div className="flex-row justify-space-between">
            <p className=" col-12 col-lg-6 my-5">
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
              // width="500px"
            />
          </div>
          <div className="flex-row justify-space-between">
            <img
              className="grow col-12 col-lg-5"
              src={onlineSelling}
              alt="bubs app mockup"
              // width="600px"
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
      <section id="team" className="team py-5 ">
        <div className="text-center mx-5 px-5">
          <h1 className="page-title text-light">Meet The Team</h1>
        </div>
        <div className="flex-row justify-space-around py-5">
          <img
            src={emp1}
            className="emp-avatar col-6 col-md-2"
            alt="avatar of employee"
          />
          <img
            src={emp2}
            className="emp-avatar col-6 col-md-2"
            alt="avatar of employee"
          />
          <img
            src={emp3}
            className="emp-avatar col-6 col-md-2"
            alt="avatar of employee"
          />
          <img
            src={emp4}
            className="emp-avatar col-6 col-md-2"
            alt="avatar of employee"
          />
        </div>
      </section>
      <section id="signup" className="signup py-5">
        <div className="text-center mx-5 px-5 text-light">
          <h1 className="page-title">Sign Up</h1>
          <p>
            Be the first to know when our beta launches! Sign up now to receive
            updates and exclusive access to our innovative platform.
          </p>
        </div>
        <form
          id="signup-form"
          className="form flex-row justify-center"
          onSubmit={handleFormSubmit}
          onChange={handleChange}
          // method="POST"
          action="https://script.google.com/macros/s/AKfycbzFLF0NBUZNaRJPWX4vc30h2IDfATngcm3bBYBCu4nW1b2Zn77DWB8m0gRHoHy_E2Fs/exec"
        >
          <div className="col-11 col-md-6">
            <div className="form-entry">
              {/* <label className="form-label " name="name">
              Name
            </label> */}
              <input
                type="text"
                placeholder="Name"
                className="form-input"
                name="Name"
              />
            </div>
            <div className="form-entry">
              {/* <label className="form-label " name="email">
              Email Address
            </label> */}
              <input
                type="text"
                placeholder="Email Address"
                className="form-input"
                name="Email"
              />
            </div>
            <div className="flex-row justify-center" id="error-message-display">
              <p className="display-none" id="error-message">
                An unexpected error occurred
              </p>
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Home;
