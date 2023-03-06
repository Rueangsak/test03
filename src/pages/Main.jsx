import "../CSS/App.css";

import { Navigation } from "../c-main/navigation";
import { Header } from "../c-main/header";
import { Features } from "../c-main/features";
import { About } from "../c-main/about";
import { Gallery } from "../c-main/gallery";
import { Contact } from "../c-main/contact";


import JsonData from "../c-main/data/data.json";
import SmoothScroll from "smooth-scroll";
import { useState, useEffect } from "react";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


const Main = () => {


  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);


  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Gallery data={landingPageData.Gallery}/>
      <Contact data={landingPageData.Contact} />
      
    </div>
  );
};

export default Main;
