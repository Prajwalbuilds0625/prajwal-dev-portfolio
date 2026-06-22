import profile from "../assets/images/profile.png";
import resume from "../assets/resume/Prajwal_Khedkar_Resume.pdf";

function Home() {
  return (
    <section id="home" className="hero-section">
      <div className="orange-glow glow-one"></div>
      <div className="orange-glow glow-two"></div>

      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-7 hero-left">
            <span className="hero-label">Full Stack Developer</span>

            <h1>
              Hi, I'm <br />
              <span>Prajwal Khedkar</span>
            </h1>

            <p className="hero-desc">
              I build responsive and practical full stack web applications using
              React.js, JavaScript, Node.js, Express.js, MySQL and PostgreSQL.
              I enjoy creating real-world projects with clean UI, REST APIs and
              database integration.
            </p>

            <div className="hero-tags">
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>PostgreSQL</span>
              <span>MySQL</span>
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="btn-orange">
                View Projects
              </a>

              <a href={resume} download className="btn-white">
                Download Resume
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/Prajwalbuilds0625"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="https://linkedin.com/in/prajwal-khedkar-09b499283"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href="https://www.instagram.com/_prajwal_0625?igsh=cGk3NmdnMG5jYmk3"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-5 text-center hero-right">
            <div className="profile-wrapper">
              <div className="profile-border"></div>

              <img
                src={profile}
                alt="Prajwal Khedkar"
                className="hero-profile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;