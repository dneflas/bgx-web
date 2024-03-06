import phoneMockup from "../assets/images/iphone-mockup-logo.png";
import onlineSelling from "../assets/images/online-selling.png";
const About = () => {
  return (
    <section id="about" className="about py-5 px-4 text-light">
      <div className=" flex-row justify-center ">
        <div className="text-center col-11 col-sm-8">
          <h1 className="page-title col-12">About Bubs</h1>
          <p className="">
            Welcome to Hello-BUBS.com, where our mission is to simplify the
            journey of parenthood, one item at a time. In the whirlwind of
            raising children, finding the right gear to support their growth can
            be challenging—not to mention expensive. That's where we come in.
            Hello-BUBS.com is a dedicated secondary marketplace for new and used
            children's gear, designed with families in mind.
          </p>
        </div>
        {/* Vision Section */}
        <div className="flex-row justify-space-between  align-center">
          <div className="col-12 col-lg-6 my-5">
            <h3>Our Vision</h3>
            <p>
              Our platform is built on the belief that every child deserves the
              best start in life, and every parent should have access to quality
              products that make this possible without breaking the bank. We've
              created a seamless experience for discovering and trading items
              that not only support your child's growth but also promote
              sustainability and smart consumerism.
            </p>
          </div>
          <img
            className="grow col-12 col-md-4"
            src={phoneMockup}
            alt="bubs app mockup"
          />
        </div>
        {/* Commitment Section */}
        <div className="flex-row flex-reverse justify-space-between align-center">
          <img
            className="grow col-12 col-md-6"
            src={onlineSelling}
            alt="bubs app mockup"
          />
          <div className="col-12 col-lg-5 my-5">
            <h3>Our Commitment</h3>
            <p>
              At Hello-BUBS.com, we are committed to providing a user-friendly,
              secure, and efficient platform where parents can buy and sell
              children's gear with ease. From strollers and car seats to toys
              and clothes, our marketplace is a vibrant community of parents
              supporting each other. We believe in building a future where items
              get a second life, reducing waste and promoting a cycle of reuse
              that benefits our planet and our pockets.
            </p>
          </div>
        </div>
        {/* Why Hello-BUBS.com? Section */}
        <div className="flex-row justify-center">
          <div className="col-12 my-5">
            <h3 className="text-center">Why Hello-BUBS.com?</h3>
            <ul>
              <li>
                <b>Seamless Experience</b>: Our intuitive platform makes it easy
                to find exactly what you need or list items you no longer use.
              </li>
              <li>
                <b>Quality and Safety First</b>: Every item is vetted to ensure
                it meets safety standards, giving you peace of mind.
              </li>
              <li>
                <b>Community Support</b>: Join a community of like-minded
                parents who understand the journey of raising children. -
              </li>
              <li>
                <b>Sustainability</b>: By trading in our marketplace, you're
                making an environmentally friendly choice that supports
                sustainable living.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
