import { useEffect } from "react";
import type { PropsWithChildren } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    // Home unmounts wholesale when navigating to a project detail page and
    // back. Several animation utilities (character parallax, split-text
    // reveals, ...) create scroll-linked GSAP timelines imperatively,
    // outside of React's lifecycle, with no cleanup of their own. Left
    // alone, each one leaks across a remount, keeps ticking against
    // detached elements, and corrupts the scroll/pin math for the next
    // mount. This is the catch-all: wipe every GSAP animation and
    // ScrollTrigger when this page goes away, so the next mount starts
    // from a clean slate regardless of which utility created what.
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.globalTimeline.clear();
    };
  }, []);

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
