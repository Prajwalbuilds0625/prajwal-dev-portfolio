import resume from "../assets/resume/Prajwal_Khedkar_Resume.pdf";

function Resume() {
  return (
    <section id="resume" className="section-padding resume-section">
      <div className="container">
        <div className="resume-card">
          <span>Resume</span>
          <h2>Want to know more about my skills and projects?</h2>
          <p>
            Download my updated resume to view my education, technical skills,
            full stack projects, certifications and developer profile.
          </p>

          <div className="resume-actions">
            <a href={resume} target="_blank" rel="noreferrer" className="btn-orange">
              View Resume
            </a>

            <a href={resume} download className="btn-white">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;