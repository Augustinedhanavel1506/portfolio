import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

export const smoother = { paused: (_v: boolean) => {} };

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        const href = element.getAttribute("data-href");
        const target = href ? document.querySelector(href) : null;
        // Only intercept when the section actually exists on this page
        // (e.g. the home page). On other routes, let the browser do a
        // real navigation back to the home page's anchor.
        if (target && window.innerWidth > 1024) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }, []);
  const homeUrl = import.meta.env.BASE_URL;
  return (
    <>
      <div className="header">
        <Link to="/" className="navbar-title" data-cursor="disable">
          AD
        </Link>
        <a
          href="mailto:dhanushaugu88830@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          dhanushaugu88830@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href={`${homeUrl}#about`}>
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href={`${homeUrl}#work`}>
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href={`${homeUrl}#contact`}>
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
