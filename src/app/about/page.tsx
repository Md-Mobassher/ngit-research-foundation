import Intro from "../home/Intro";
import Governance from "../home/Governance";

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="lg:my-12 my-8 lg:px-20 px-5 overflow-x-hidden overflow-hidden mx-auto ">
        <h2 className="text-3xl font-semibold mb-2">About Us</h2>
        <hr />
        <Intro />
        <Governance />
      </div>
    </div>
  );
};

export default AboutPage;
