// import { useEffect } from "react";
import DownloadBtn from "../components/DownloadBtn";
import logoIcon from "../assets/images/logo.png";
import emp1 from "../assets/images/emp-1.png";
import emp2 from "../assets/images/emp-1.png";
import SignUpForm from "../components/SignupForm";
import About from "../components/About";

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
  // window.addEventListener(
  //   "scroll",
  //   () => {
  //     document.body.style.setProperty(
  //       "--scroll",
  //       window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
  //     );
  //   },
  //   false
  // );

  // window.addEventListener(
  //   "scroll",
  //   () => {
  //     const maxScroll = 2000; // Define the maximum scroll position where you want to stop updating --scroll
  //     const currentScroll = window.pageYOffset;

  //     // If the current scroll position is less than the maximum scroll position, update --scroll
  //     if (currentScroll < maxScroll) {
  //       document.body.style.setProperty(
  //         "--scroll",
  //         currentScroll / (document.body.offsetHeight - window.innerHeight)
  //       );
  //     }
  //   },
  //   false
  // );

  // useEffect(() => {
  //   const sectionTop = document.querySelector("#team").offsetTop;

  //   const handleScroll = () => {
  //     const currentScroll = window.pageYOffset;

  //     if (currentScroll <= sectionTop) {
  //       document.querySelector(".emp-avatar").style.animationPlayState =
  //         "running";
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="">
        <div className="text-light mx-4">
          <div className="flex-row justify-flex-start">
            <img
              src={logoIcon}
              alt="Red outline of box with gear inside"
              className="col-12 col-sm-2"
            />
          </div>
          <h1 className="page-title">
            A marketplace. Built by parents, for parents.
          </h1>
          <p className="">
            This platform is designed to offer a seamless experience for
            discovering and trading items that support your child's growth.
          </p>
          <div className=" ml-5">
            <DownloadBtn className="my-auto" />
          </div>
        </div>
      </section>
      <About />
      {/* Team Section */}
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
      {/* Sign Up Section */}
      <section id="signup" className="signup py-5">
        <div className="text-center flex-row justify-center text-light">
          <h1 className="page-title col-11">Join Our Community</h1>
          <p className="col-10">
            Hello-BUBS.com is more than just a marketplace; it's a community of
            parents navigating the beautiful, albeit sometimes challenging,
            journey of raising children. By sharing resources, we not only help
            each other but also foster a more sustainable world for our
            children.
            <br />
            <br />
            Discover the joy of finding the perfect item that brings a smile to
            your child's face or passing on pre-loved gear to a new home. Let's
            make parenting a little easier, together.
            <br />
            <br />
            Welcome to the Hello-BUBS family. Here's to growing together!
          </p>
        </div>
        <SignUpForm className="py-4" />
      </section>
    </>
  );
};

export default Home;
