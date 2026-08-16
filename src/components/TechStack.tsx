import { TbDeviceDesktop, TbServer2, TbDatabase, TbTools } from "react-icons/tb";
import { MdVerifiedUser } from "react-icons/md";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiPython,
  SiDjango,
  SiPhp,
  SiCodeigniter,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiCelery,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import type { IconType } from "react-icons";
import "./styles/TechStack.css";

interface TechItem {
  name: string;
  type: string;
  icon: IconType;
  color: string;
}

interface TechCategory {
  title: string;
  icon: IconType;
  items: TechItem[];
}

const categories: TechCategory[] = [
  {
    title: "Frontend",
    icon: TbDeviceDesktop,
    items: [
      { name: "React", type: "Library", icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", type: "Language", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", type: "Markup", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", type: "Styling", icon: SiCss, color: "#1572B6" },
    ],
  },
  {
    title: "Backend",
    icon: TbServer2,
    items: [
      { name: "Python", type: "Language", icon: SiPython, color: "#3776AB" },
      { name: "Django", type: "Framework", icon: SiDjango, color: "#0C4B33" },
      { name: "PHP", type: "Language", icon: SiPhp, color: "#777BB4" },
      { name: "CodeIgniter", type: "Framework", icon: SiCodeigniter, color: "#EE4623" },
      { name: "Java", type: "Language", icon: FaJava, color: "#F89820" },
      { name: "Spring Boot", type: "Framework", icon: SiSpringboot, color: "#6DB33F" },
    ],
  },
  {
    title: "Database",
    icon: TbDatabase,
    items: [
      { name: "MySQL", type: "Database", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", type: "Database", icon: SiPostgresql, color: "#4169E1" },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: TbTools,
    items: [
      { name: "Git", type: "VCS", icon: SiGit, color: "#F05032" },
      { name: "GitHub", type: "Platform", icon: SiGithub, color: "#ffffff" },
      { name: "JWT", type: "Auth", icon: MdVerifiedUser, color: "#10b981" },
      { name: "Celery", type: "Task Queue", icon: SiCelery, color: "#37814A" },
    ],
  },
];

const TechStack = () => {
  return (
    <div className="techstack" id="techstack">
      <div className="techstack-container section-container">
        <div className="techstack-tag">
          <span className="techstack-dot" />
          Tech Stack
        </div>
        <h2>My Tech Stack</h2>
        <p className="techstack-subtitle">
          Technologies I use to build modern and scalable web applications.
        </p>

        {categories.map((category) => (
          <div className="techstack-category" key={category.title}>
            <h3>
              <category.icon /> {category.title}
            </h3>
            <div className="techstack-grid">
              {category.items.map((item) => (
                <div className="techstack-card" key={item.name}>
                  <span className="techstack-icon" style={{ color: item.color }}>
                    <item.icon />
                  </span>
                  <div>
                    <p className="techstack-name">{item.name}</p>
                    <p className="techstack-type">{item.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
