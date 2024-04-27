const ResearchPage = () => {
  return (
    <>
      <div className="lg:my-12 my-8 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl mb-2  font-semibold ">Research</h2>
        <hr />

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-3">RESEARCH AREA</h3>
          <p className="mb-3">
            NGIT aims to contribute to the global community. It focuses on the
            areas of research:
          </p>
          <div className="ml-5">
            <ol className="list-decimal list-outside ">
              <li>&nbsp; EEE based research</li>
              <li>&nbsp; CSE based research</li>
            </ol>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-3">RESEARCH PROJECT</h3>

          <div className="ml-5">
            <ol className="list-decimal list-outside ">
              <li>
                &nbsp; Energy storage & management system (ESMS), Supervised by
                A K M Ahasan Habib
              </li>
              <li>&nbsp; Waste management system, </li>
              <li>
                &nbsp; Renewable energy sector in Bangladesh, Supervised by A K
                M Ahasan Habib{" "}
              </li>
              <li>&nbsp; Health monitoring system, </li>
            </ol>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-3">COLLABORATOR </h3>

          <div className="mb-3 ">
            <h4 className="font-semibold">National:</h4>
          </div>

          <div className="">
            <h4 className="font-semibold">International:</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResearchPage;
