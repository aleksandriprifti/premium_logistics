import React from "react";

import Navbar from "./Navbar/navbar";
import FirstSection from "./FirstSection/page";
import SecondSection from "./SecondSection/page";
import ThirdSection from "./ThirdSection/page";
import FourthSection from "./FourthSection/page";
import Footer from "./footer/page";
import FifthSection from "./FifthSection/page";
import SixthSection from "./SixthSection/page";
import SeventhSection from "./SeventhSection/page";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
