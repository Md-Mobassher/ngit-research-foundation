import Advisor from "./Advisor";
import FounderChairman from "./FounderChairman";

const Governance = () => {
  return (
    <div className="my-20 lg:mt-28 md:mt-20 mt-16">
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
      {/*  <div className="mt-10 ">
        <h5 className="text-xl font-semibold  text-center mb-4">
          HEAD of DEPT.
        </h5>
        <img src="" alt="" />
      </div>
      <div className="mt-10">
        <h5 className="text-xl font-semibold  text-center mb-4">
          Dept. of ECE:
        </h5>
        <img src="" alt="" />
      </div>
      <div className="mt-10">
        <h5 className="text-xl font-semibold  text-center mb-4">
          Dept. of CSE:
        </h5>
        <img src="" alt="" />
      </div>
      <div className="mt-10">
        <h5 className="text-xl font-semibold  text-center mb-4">
          Dept. of MecE:
        </h5>
        <img src="" alt="" />
      </div>
      <div className="mt-10">
        <h5 className="text-xl font-semibold  text-center mb-4">
          MANAGEMENT TEAM:
        </h5>
        <img src="" alt="" />
      </div> */}
    </div>
  );
};

export default Governance;
