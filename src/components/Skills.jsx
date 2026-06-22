function Skills() {
  const skills = [
    { name: "HTML5", icon: "bi-filetype-html" },
    { name: "CSS3", icon: "bi-filetype-css" },
    { name: "JavaScript", icon: "bi-filetype-js" },
    { name: "React.js", icon: "bi-lightning-charge" },
    { name: "Redux", icon: "bi-diagram-3" },
    { name: "Node.js", icon: "bi-server" },
    { name: "Express.js", icon: "bi-code-slash" },
    { name: "MySQL", icon: "bi-database" },
    { name: "PostgreSQL", icon: "bi-database-check" },
    { name: "GitHub", icon: "bi-github" },
    { name: "Bootstrap", icon: "bi-bootstrap" },
    { name: "Next.js", icon: "bi-window-stack" },
  ];

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">
        <div className="section-title">
          <h2>Technical Skills</h2>
          <p>Technologies I use to build modern web applications</p>
        </div>

        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-lg-3 col-md-4 col-6 mb-4" key={index}>
              <div className="new-skill-card">
                <i className={`bi ${skill.icon}`}></i>
                <h4>{skill.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;