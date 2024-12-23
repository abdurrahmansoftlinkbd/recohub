import Accordion from "../components/Accordion";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Slider></Slider>
      <section className="container w-11/12 mx-auto font-inter">
        <Accordion></Accordion>
      </section>
    </>
  );
};

export default Home;
