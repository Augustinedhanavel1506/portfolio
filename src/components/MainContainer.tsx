import { useEffect } from "react";
import type { PropsWithChildren } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import TechStack from "./TechStack";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";

const MainContainer = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const resizeHandler = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setSplitText();
      }, 150);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{children}</Landing>
            <About />
            <WhatIDo />
            <Career />
            <Work />
            <TechStack />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
