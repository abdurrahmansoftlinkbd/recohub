import Accordion from "../components/Accordion";
import Blogs from "../components/Blogs";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Slider></Slider>
      <section className="container w-11/12 mx-auto mt-24 font-inter">
        <Blogs></Blogs>
      </section>
      <section className="container w-11/12 mx-auto font-inter">
        <Accordion></Accordion>
      </section>
    </>
  );
};

export default Home;
