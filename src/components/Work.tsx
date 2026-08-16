import { useNavigate } from "react-router-dom";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../data/projects";

gsap.registerPlugin(useGSAP);

const Work = () => {
  const navigate = useNavigate();

  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    timeline.to(".work-scroll-progress", {
      scaleX: 1,
      ease: "none",
    }, 0);

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  const openDetails = (slug: string) => navigate(`/work/${slug}`);

  return (
    <div className="work-section" id="work">
      <div className="work-scroll-track">
        <div className="work-scroll-progress" />
      </div>
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div
              className="work-box"
              key={project.slug}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${project.name}`}
              onClick={() => openDetails(project.slug)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openDetails(project.slug);
                }
              }}
            >
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                {project.summary && <p>{project.summary}</p>}
                <h4>Tools and features</h4>
                <p>{project.tech}</p>
                <div className="work-links">
                  <button
                    type="button"
                    className="work-project-link work-details-link"
                    data-cursor="disable"
                    onClick={(e) => {
                      e.stopPropagation();
                      openDetails(project.slug);
                    }}
                  >
                    View Details
                  </button>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="disable"
                      className="work-project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View GitHub
                    </a>
                  )}
                </div>
              </div>
              <WorkImage
                image={project.image}
                alt={project.name}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
