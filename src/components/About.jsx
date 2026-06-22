import profile from "../assets/images/profile.png";

function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Passionate Developer Building Real World Applications</p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-5 text-center mb-4">
            <img
              src={profile}
              alt="Prajwal"
              className="about-image"
            />
          </div>

          <div className="col-lg-7">
            <div className="about-card">
              <h3>Full Stack Developer</h3>

              <p>
                I am a B.Tech Computer Engineering graduate from
                Vishwakarma University, Pune. I enjoy building
                modern web applications and learning new technologies.
              </p>

              <p>
                I have developed multiple projects including
                E-Commerce Systems, DriveEase Pro Car Rental,
                Learning Dashboard, Resume ATS Checker,
                Hospital Management System and many React applications.
              </p>

              <div className="about-grid">
                <div>
                  <span>Name</span>
                  <h6>Prajwal Khedkar</h6>
                </div>

                <div>
                  <span>Location</span>
                  <h6>Pune, Maharashtra</h6>
                </div>

                <div>
                  <span>Degree</span>
                  <h6>B.Tech Computer Engineering</h6>
                </div>

                <div>
                  <span>Role</span>
                  <h6>Full Stack Developer</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;