import Governance from "./components/Governance";

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="lg:mt-10 mt-8">
        <h2 className="text-4xl mb-3 font-semibold text-center ">
          <span className="text-blue-500">About</span> Us
        </h2>
        <hr className="border-gray-400 " />
      </div>

      <div className="lg:-mt-16 md:-mt-10 -mt-5">
        <Governance />
      </div>
    </div>
  );
};

export default AboutPage;
