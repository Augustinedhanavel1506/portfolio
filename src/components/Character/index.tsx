import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLoading } from "../../context/LoadingProvider";
import { setProgress } from "../Loading";
import { setCharTimeline, setAllTimeline } from "../utils/GsapScroll";
import { publicUrl } from "../../utils/publicUrl";

const AVATAR_IMAGE = publicUrl("/avatar-photo.webp");

const CharacterModel = () => {
  const modelRef = useRef<HTMLDivElement | null>(null);
  const photoRef = useRef<HTMLImageElement | null>(null);
  const { setLoading } = useLoading();

  useEffect(() => {
    const progress = setProgress((value) => setLoading(value));

    const reveal = () => {
      progress.loaded().then(() => {
        setTimeout(() => {
          modelRef.current?.classList.add("character-loaded");
          gsap.to(photoRef.current, {
            opacity: 1,
            duration: 1.8,
            ease: "power2.inOut",
          });
        }, 300);
      });
    };

    const img = photoRef.current;
    if (img?.complete) {
      reveal();
    } else {
      img?.addEventListener("load", reveal, { once: true });
      img?.addEventListener("error", reveal, { once: true });
    }

    let ownTriggers: ScrollTrigger[] = [];
    const killOwnTriggers = () => {
      ownTriggers.forEach((trigger) => trigger.kill());
      ownTriggers = [];
    };

    const rebuildTimelines = () => {
      killOwnTriggers();
      ownTriggers = [
        ...setCharTimeline(modelRef.current, photoRef.current),
        ...setAllTimeline(),
      ];
    };

    rebuildTimelines();
    window.addEventListener("resize", rebuildTimelines);

    return () => {
      img?.removeEventListener("load", reveal);
      img?.removeEventListener("error", reveal);
      window.removeEventListener("resize", rebuildTimelines);
      killOwnTriggers();
    };
  }, []);

  return (
    <div className="character-container">
      <div className="character-model" ref={modelRef}>
        <div className="character-rim"></div>
        <img
          ref={photoRef}
          src={AVATAR_IMAGE}
          alt="Augustine D"
          className="character-photo"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default CharacterModel;
