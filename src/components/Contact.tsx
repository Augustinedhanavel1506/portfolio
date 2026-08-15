import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { TbDownload } from "react-icons/tb";
import { publicUrl } from "../utils/publicUrl";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:dhanushaugu88830@gmail.com" data-cursor="disable">
                dhanushaugu88830@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Augustinedhanavel1506"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/augustine-d-db1506202"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <a
              href={publicUrl("/resume.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-resume"
            >
              <TbDownload /> Download Resume
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Built by <span>Augustine D</span>
            </h2>
            <h5>
              <MdCopyright /> 2026 Augustine D. All Rights Reserved.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
