import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { Project01 } from "./components/project01";
import { Project02 } from "./components/project02";
import { Project03 } from "./components/project03";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Project01 data={landingPageData.Project01} />
      <Project02 data={landingPageData.Project02} />
      <Project03 data={landingPageData.Project03} />
      {/* <Contact data={landingPageData.Contact} /> */}
    </div>
  );
};

export default App;
