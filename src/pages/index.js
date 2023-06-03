import Banner from "@/components/Banner";
import CTA from "@/components/CTA";
import ExploreNearby from "@/components/ExploreNearby";
import LiveAnywhere from "@/components/LiveAnywhere";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <ExploreNearby />
      <LiveAnywhere />
      <CTA />
    </div>
  );
};

export default Home;
