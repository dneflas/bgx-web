import DownloadBtn from "../components/DownloadBtn";

const Home = () => {
  return (
    <>
      <section id="hero" className="py-5">
        <div className="">
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
          <h1 className="page-title">About</h1>
          <p>
            Art party roof party butcher single-origin coffee gluten-free offal.
            Banh mi palo santo mlkshk, yuccie master cleanse normcore
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
      </section>
      <section className="team py-5 text-light">
        <div className="text-center mx-5 px-5">
          <h1 className="page-title">Meet The Team</h1>
        </div>
      </section>
    </>
  );
};

export default Home;
