function Education() {
  return (
    <section id="education" className="section-padding education-section">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
          <p>My Academic Journey</p>
        </div>

        <div className="timeline">
          <div className="timeline-card">
            <span>2022 - 2026</span>
            <h3>B.Tech Computer Engineering</h3>
            <h5>Vishwakarma University, Pune</h5>
            <p>
              Completed Bachelor of Technology in Computer Engineering with
              focus on Software Development, Databases, Web Technologies,
              Programming and Project Development.
            </p>
          </div>

          <div className="timeline-card">
            <span>Higher Secondary</span>
            <h3>Science Stream</h3>
            <h5>Maharashtra Board</h5>
            <p>
              Studied Physics, Chemistry and Mathematics with strong interest
              in Computer Science and Technology.
            </p>
          </div>

          <div className="timeline-card">
            <span>Secondary School</span>
            <h3>SSC</h3>
            <h5>Maharashtra Board</h5>
            <p>
              Built a strong academic foundation and developed interest in
              problem solving and computers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;