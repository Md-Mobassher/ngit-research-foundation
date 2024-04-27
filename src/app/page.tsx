import React from "react";
import Banner from "./home/Banner";
import Intro from "./home/Intro";

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Banner />
      <Intro />
    </div>
  );
};

export default HomePage;
