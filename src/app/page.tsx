import React from "react";
import Banner from "./home/Banner";
import Intro from "./home/Intro";
import Governance from "./home/Governance";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
      <Banner />
      <Intro />
      <Governance />
    </div>
  );
};

export default HomePage;
