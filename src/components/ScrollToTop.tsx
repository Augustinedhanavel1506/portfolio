import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router doesn't reset scroll position on navigation. Without this,
 * a route change keeps whatever scrollY the previous page had — which on
 * this site also throws off the scroll-linked GSAP animations on Home,
 * since they evaluate progress against the leftover offset instead of 0.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
