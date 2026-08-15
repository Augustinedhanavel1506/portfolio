import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm a full stack developer at Logimax Technologies, building production
          platforms for enterprise clients in the jewellery and logistics space.
        </p>
        <p className="para">
          Day to day: Python/Django REST on the backend, React/TypeScript on the front,
          plus a Flutter client, Celery for scheduled jobs, and WebSockets for real-time
          sync. I've shipped an N-level dynamic approval chain, a Kanban engine with WIP
          limits, and a KYC compliance suite — and a fair share of my time goes to
          production debugging, which is probably where I've learned the most.
        </p>
        <p className="para">
          Before this I was an AR Analyst in healthcare, where accuracy wasn't optional —
          that habit of precision carried straight into engineering. Outside work I keep
          picking things up: Java and Spring Boot, IoT healthcare systems, spatio-temporal
          data analysis.
        </p>
      </div>
    </div>
  );
};

export default About;
