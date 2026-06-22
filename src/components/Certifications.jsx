import certificate from "../assets/certificates/PrajwalKhedkar.pdf";
import courseraCertificate from "../assets/certificates/coursera.pdf";

function Certifications() {
  const certificates = [
    {
      icon: "bi-patch-check-fill",
      title: "Java Full Stack Development",
      provider: "Envision Computer Training Institute",
      status: "Aug 2025 - Apr 2026",
      link: certificate,
    },
    {
      icon: "bi-award-fill",
      title: "Coursera Certification",
      provider: "Coursera Online Learning Platform",
      status: "Successfully Completed Course",
      link: courseraCertificate,
    },
  ];

  return (
    <section id="certifications" className="section-padding cert-section">
      <div className="container">
        <div className="section-title">
          <h2>Certifications</h2>
          <p>Professional training and verified learning</p>
        </div>

        <div className="row justify-content-center">
          {certificates.map((cert, index) => (
            <div className="col-lg-5 col-md-6 mb-4" key={index}>
              <div className="new-cert-card">
                <div className="cert-icon">
                  <i className={`bi ${cert.icon}`}></i>
                </div>

                <h4>{cert.title}</h4>
                <p>{cert.provider}</p>
                <span>{cert.status}</span>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-btn"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;