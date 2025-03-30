import React from "react";
import Connect from "./Component/Connect";
import Footer from "./Component/Footer";
import HeroPage from "./Component/HeroPage";
import Links from "./Component/Links";
import Navbar from "./Component/Navbar";
import TestCards from "./Component/TestCards";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroPage />
      <TestCards />
      <Connect />
      <Links />
      <Footer />
    </div>
  );
}
