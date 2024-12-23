import { Fade } from "react-awesome-reveal";

const Accordion = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center my-24">
        {/* image */}
        <div className="w-full lg:w-5/12">
          <Fade direction="left" triggerOnce={true}>
            <img
              src="https://i.ibb.co.com/8BvwvLF/backpack-advert4-5d54711e-9819-491b-9221-14e59bfaf3d5.webp"
              alt="metallic-dumbbell"
              className="w-full"
            />
          </Fade>
        </div>
        {/* faq */}
        <div className="w-full lg:w-1/2">
          <Fade triggerOnce={true}>
            <p className="mb-4 text-sm font-montserrat font-medium">FAQ</p>
            <h1 className="text-5xl font-montserrat font-semibold mb-5">
              What Our Community Asks Most
            </h1>
            {/* 1st */}
            <div className="collapse collapse-arrow border-t border-b">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-2xl font-semibold font-montserrat">
                How does the recommendation system work?
              </div>
              <div className="collapse-content">
                <p>
                  Our platform allows users to submit queries about products
                  they’re looking to replace or find alternatives for. Other
                  community members can then share their experiences and
                  recommend alternative products based on their personal
                  experience. Each recommendation includes detailed reasoning
                  and product comparisons to help you make informed decisions.
                </p>
              </div>
            </div>
            {/* 2nd */}
            <div className="collapse collapse-arrow border-b">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-2xl font-semibold font-montserrat">
                What makes a good product query?
              </div>
              <div className="collapse-content">
                <p>
                  A good product query includes specific details about the
                  product you’re currently using or interested in, your main
                  concerns or reasons for seeking alternatives, and what
                  specific features or improvements you’re looking for. The more
                  detailed your query, the better recommendations you’ll receive
                  from the community.
                </p>
              </div>
            </div>
            {/* 3rd */}
            <div className="collapse collapse-arrow border-b">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-2xl font-semibold font-montserrat">
                How do I know if a recommendation is trustworthy?
              </div>
              <div className="collapse-content">
                <p>
                  Each recommendation comes from real users who share their
                  personal experiences. You can view the recommender’s profile,
                  their previous recommendations, and how many other users found
                  their suggestions helpful. Additionally, all recommendations
                  must include detailed reasoning and comparisons to help
                  validate their suggestions.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Accordion;
