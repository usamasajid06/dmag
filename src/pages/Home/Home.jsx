import React from "react";
import InterestedSection from "./InterestedSection";
import Solution from "./Solution";
import Services from "./Services";
import Contact from "./Contact";
import NewsLetter from "./NewsLetter";
import Residences from "./Residences";
import Blogs from "./Blogs";

const Home = () => {
  return (
    <div>
      <InterestedSection />
      <Solution />
      <Services />
      <Residences />
      <Blogs />
      <NewsLetter />
      <Contact />
    </div>
  );
};

export default Home;
