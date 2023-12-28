import React from "react";

import Header from "../Header/Header";
import Partners from "../Partners/Partners";
import SecondSection from "../SecondSection/SecondSection";

const Home = () => {
  let x = import.meta.env.VITE_LOCAL_BACKEND;

  return (
    <>
      <div className="min-h-screen">
        <Header />
        <SecondSection />
        <Partners />
      </div>
    </>
  );
};

export default Home;
