import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  const main = document.getElementsByTagName("main")[0];
  if (main) main.classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#0a0f0d",
    duration: 0.5,
    delay: 1,
  });

  gsap.fromTo(
    [".landing-info h3", ".landing-intro h2"],
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.08,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-intro h1",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.6,
      ease: "power1.inOut",
      delay: 0.8,
    }
  );

  gsap.fromTo(
    ".landing-h2-info",
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  loopTwoLines(".landing-h2-info", ".landing-h2-info-1");
  loopTwoLines(".landing-h2-1", ".landing-h2-2");

  // CharacterModel sets up the About/WhatIDo/Career ScrollTriggers as soon
  // as it mounts, which can be before web fonts or images below the fold
  // have finished loading and settled the page's real layout. Fast
  // scrolling right after the loading screen hands off can then land on
  // stale trigger boundaries (e.g. the WhatIDo card reveal never
  // finishing). Recompute everything now that we're considered "ready".
  requestAnimationFrame(() => requestAnimationFrame(() => ScrollTrigger.refresh()));
  document.fonts?.ready?.then(() => ScrollTrigger.refresh());

  // A full-page reload landing on e.g. #work (see WorkDetail's "Back to
  // portfolio" link) arrives before the loading sequence has revealed the
  // page, so the browser's native scroll-to-anchor happens too early and
  // silently no-ops. Do it ourselves once everything is ready — after a
  // short delay, since scrolling concurrently with the ScrollTrigger
  // .refresh() calls above (which resize the pinned Work section's spacer)
  // gets reset back to 0 mid-animation.
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    setTimeout(() => {
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  }
}

function loopTwoLines(selector1: string, selector2: string) {
  const el1 = document.querySelector(selector1);
  const el2 = document.querySelector(selector2);
  if (!el1 || !el2) return;

  gsap.set(el2, { opacity: 0, y: 80 });
  const delay = 4;

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  // Swap 1: el1 exits up while el2 enters from below — simultaneous
  tl.to(el1, { y: -80, opacity: 0, duration: 1.2, ease: "power3.inOut", delay })
    .to(el2, { y: 0, opacity: 1, duration: 1.2, ease: "power3.inOut" }, "<")
    // Swap 2: el2 exits up while el1 enters from below — simultaneous
    .set(el1, { y: 80 }, `+=${delay}`)
    .to(el2, { y: -80, opacity: 0, duration: 1.2, ease: "power3.inOut" })
    .to(el1, { y: 0, opacity: 1, duration: 1.2, ease: "power3.inOut" }, "<");
}
