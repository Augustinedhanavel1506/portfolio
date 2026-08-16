import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { publicUrl } from "../utils/publicUrl";

gsap.registerPlugin(useGSAP);

interface WorkProject {
  name: string;
  category: string;
  description: string;
  tech: string;
  link?: string;
  image: string;
}

const projects: WorkProject[] = [
  {
    name: "Employee Project & Task Management System",
    category: "Full-Stack / React & Django REST Framework",
    description:
      "A full-stack, role-based workforce management platform with three-tier Admin/Manager/Employee access control enforced at the API layer, plus JWT authentication with access/refresh rotation and blacklist-on-logout. Covers employee onboarding, project and task assignment with auto-computed progress, leave requests and approvals, task attachments (file, audio, video, URL) with server-side validation, and a live analytics dashboard with colorblind-safe charts and dark/light theming.",
    tech: "React 19, Django REST Framework, MySQL, JWT Auth",
    link: "https://github.com/Augustinedhanavel1506/employee-project-management",
    image: publicUrl("/images/project-employee-management.png"),
  },
  {
    name: "Smart Healthcare Management System",
    category: "IoT / AI / Machine Learning",
    description:
      "A smart healthcare management system leveraging IoT, AI, and machine learning to enhance patient care and operational efficiency — real-time patient monitoring, predictive analytics for treatment optimization, and seamless EHR integration, plus telemedicine features and data security protocols for compliance.",
    tech: "IoT, AI/ML, EHR Integration, Telemedicine",
    link: "https://github.com/Augustinedhanavel1506",
    image: publicUrl("/images/project-healthcare.svg"),
  },
  {
    name: "Air Pollution Detection Using Spatio-Temporal Data",
    category: "GIS / Machine Learning",
    description:
      "A system to detect and analyze air pollution patterns using spatio-temporal data, integrating real-time sensor data and GIS with machine learning to predict pollution trends and visualize hotspots across time and space — aiding urban planning and public health interventions.",
    tech: "GIS, Machine Learning, Sensor Data",
    link: "https://github.com/Augustinedhanavel1506",
    image: publicUrl("/images/project-air-pollution.svg"),
  },
];

const Work = () => {
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
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                {project.description && <p>{project.description}</p>}
                <h4>Tools and features</h4>
                <p>{project.tech}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="disable"
                    className="work-project-link"
                  >
                    View GitHub
                  </a>
                )}
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
