import Advisor from "./Advisor";
import FounderChairman from "./FounderChairman";
import ItSpecialist from "./ItSpecialist";

const Governance = () => {
  return (
    <div className=" lg:mt-28 md:mt-20 mt-16">
      <div>
        <h2 className="text-3xl font-semibold text-center">
          FOUNDER & CHAIRMAN
        </h2>
        <FounderChairman />
      </div>
      <div className="lg:mt-28 md:mt-20 mt-16">
        <h2 className="text-3xl font-semibold text-center">ADVISOR</h2>
        <Advisor />
      </div>

      <div className="lg:mt-28 md:mt-20 mt-16">
        <h2 className="text-3xl font-semibold text-center">IT Specialist</h2>
        <ItSpecialist />
      </div>
    </div>
  );
};

export default Governance;
