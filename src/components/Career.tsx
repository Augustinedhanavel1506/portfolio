import "./styles/Career.css";

interface CareerEntry {
  role: string;
  company: string;
  year: string;
  description: string;
}

const careerEntries: CareerEntry[] = [
  {
    role: "Junior Full Stack Developer",
    company: "Logimax Technologies Pvt. Ltd.",
    year: "NOW",
    description:
      "Building and maintaining scalable enterprise-level applications for jewellery and logistics platforms — frontend to backend, requirement analysis to deployment.",
  },
  {
    role: "AR Analyst",
    company: "Firstsource Solutions Limited",
    year: "2025",
    description:
      "Analyzed and processed healthcare claims, reconciled accounts and payment posting, and identified claim denials while staying compliant with HIPAA and data protection guidelines.",
  },
  {
    role: "Frontend Developer Intern",
    company: "Makinfratek Software Solution",
    year: "2023",
    description:
      "Coded user interfaces and implemented design specs into responsive, visually appealing components, working alongside senior developers on the full dev lifecycle.",
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {careerEntries.map((entry) => (
            <div className="career-info-box" key={entry.company}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{entry.role}</h4>
                  <h5>{entry.company}</h5>
                </div>
                <h3>{entry.year}</h3>
              </div>
              <p>{entry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
