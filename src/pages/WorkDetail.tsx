import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MdArrowOutward, MdArrowBack } from "react-icons/md";
import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
import { projects } from "../data/projects";
import "./styles/WorkDetail.css";

const homeUrl = import.meta.env.BASE_URL;

const WorkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    document.title = project
      ? `${project.name} | Augustine D`
      : "Project not found | Augustine D";
  }, [project]);

  if (!project) {
    return (
      <div className="container-main">
        <Cursor />
        <Navbar />
        <main className="work-detail-section section-container">
          <p className="work-detail-category">404</p>
          <h1>Project not found</h1>
          <a href={homeUrl} className="work-back-link" data-cursor="disable">
            <MdArrowBack /> Back to portfolio
          </a>
        </main>
      </div>
    );
  }

  const images =
    project.images && project.images.length > 0
      ? project.images
      : [project.image];

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <main className="work-detail-section section-container">
        <a href={`${homeUrl}#work`} className="work-back-link" data-cursor="disable">
          <MdArrowBack /> Back to portfolio
        </a>

        <p className="work-detail-category">{project.category}</p>
        <h1 className="work-detail-title">{project.name}</h1>
        <p className="work-detail-description">{project.description}</p>

        <div className="work-detail-tech">
          <h4>Tools and features</h4>
          <p>{project.tech}</p>
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
            className="work-project-link work-detail-github"
          >
            View GitHub <MdArrowOutward />
          </a>
        )}

        <div className="work-detail-gallery">
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${project.name} screenshot ${i + 1}`}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default WorkDetail;
