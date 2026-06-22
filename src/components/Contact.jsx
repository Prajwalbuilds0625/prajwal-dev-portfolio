import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const [showPopup, setShowPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_vmwm5af", "template_ei8h87c", form.current, {
        publicKey: "2asvXyHM-hssQ5wv4",
      })
      .then(
        () => {
          setLoading(false);
          setShowPopup(true);
          form.current.reset();

          setTimeout(() => setShowPopup(false), 3000);
        },
        () => {
          setLoading(false);
          setErrorPopup(true);

          setTimeout(() => setErrorPopup(false), 3000);
        }
      );
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="section-title">
          <h2>Contact Me</h2>
          <p>Let's connect and build something useful</p>
        </div>

        {showPopup && <div className="contact-popup">Message sent successfully</div>}
        {errorPopup && (
          <div className="contact-popup error-popup">Message failed. Try again.</div>
        )}

        <div className="row align-items-center">
          <div className="col-lg-5 mb-4">
            <div className="contact-info-card">
              <h3>Let's Talk</h3>
              <p>
                I am ready for internship, fresher software developer and full
                stack developer opportunities.
              </p>

              <div className="contact-info-item">
                <i className="bi bi-envelope-fill"></i>
                <span>prajwalkhedkar23@gmail.com</span>
              </div>

              <div className="contact-info-item">
                <i className="bi bi-telephone-fill"></i>
                <span>+91 8010813767</span>
              </div>

              <div className="contact-info-item">
                <i className="bi bi-geo-alt-fill"></i>
                <span>Pune, Maharashtra</span>
              </div>

              <div className="contact-direct-buttons">
                <a href="mailto:prajwalkhedkar23@gmail.com">Email Me</a>
                <a href="https://wa.me/918010813767" target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <form ref={form} className="new-contact-form" onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="text" name="user_name" placeholder="Your Name" required />
                </div>

                <div className="col-md-6 mb-3">
                  <input type="email" name="user_email" placeholder="Your Email" required />
                </div>
              </div>

              <input type="text" name="subject" placeholder="Subject" required />

              <textarea name="message" rows="6" placeholder="Your Message" required></textarea>

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;