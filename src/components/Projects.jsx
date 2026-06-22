import ecommerce from "../assets/images/projects/ecommerce.jpg";
import html from "../assets/images/projects/html.jpg";
import pato from "../assets/images/projects/Pato.png";
import tourism from "../assets/images/projects/tourism.jpg";
import boot1 from "../assets/images/projects/boot1.jpg";
import boot2 from "../assets/images/projects/boot2.jpg";
import boot3 from "../assets/images/projects/boot3.jpg";
import hospital from "../assets/images/projects/hospital.jpg";
import eventhub from "../assets/images/projects/eventhub.jpg";
import dashboard from "../assets/images/projects/dashboard.jpg";
import counter from "../assets/images/projects/counter.jpg";
import addtocart from "../assets/images/projects/addtocart.jpg";
import todo from "../assets/images/projects/todo.jpg";
import driveease from "../assets/images/projects/driveease.jpg";
import learning from "../assets/images/projects/learning.jpg";
import resumeats from "../assets/images/projects/resumeats.jpg";

function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      category: "Full Stack",
      image: ecommerce,
      tech: "HTML, CSS, Bootstrap, JavaScript, Node.js, Express.js, MySQL",
      desc: "A complete shopping website with authentication, product management, cart functionality, admin panel and MySQL database integration.",
      featured: true,
      live: "",
      github: "https://github.com/Prajwalbuilds0625/ecommerce-website",
    },
    {
      title: "DriveEase Pro",
      category: "Advanced Full Stack",
      image: driveease,
      tech: "React.js, Node.js, Express.js, PostgreSQL",
      desc: "Car Rental Management System with authentication, admin dashboard, bookings, payment simulation, reviews, contact management and smart recommendations.",
      featured: true,
      live: "",
      github: "https://github.com/Prajwalbuilds0625/driveease-pro-car-rental",
    },
    {
      title: "Learning Dashboard",
      category: "Next.js",
      image: learning,
      tech: "Next.js, Supabase, Tailwind CSS",
      desc: "Modern student learning dashboard with Supabase integration, analytics cards, dark UI and responsive design.",
      featured: true,
      live: "https://learning-dashboard-red-mu.vercel.app",
      github: "https://github.com/Prajwalbuilds0625/learning-dashboard",
    },
    {
      title: "Resume ATS Checker",
      category: "Next.js",
      image: resumeats,
      tech: "Next.js, Tailwind CSS",
      desc: "ATS Resume Analyzer that evaluates resumes and provides optimization insights for job applications.",
      featured: true,
      live: "https://resume-ats-checker-alpha.vercel.app",
      github: "https://github.com/Prajwalbuilds0625/resume-ats-checker",
    },
    {
      title: "HTML Website",
      category: "Frontend",
      image: html,
      tech: "HTML, CSS",
      desc: "A basic responsive website created using HTML and CSS for frontend practice.",
      live: "https://html-website-sandy.vercel.app/",
      github: "https://github.com/Prajwalbuilds0625/html-website",
    },
    {
      title: "Food Website",
      category: "Frontend",
      image: pato,
      tech: "HTML, CSS, Bootstrap",
      desc: "A food-themed website with modern layout, sections, and responsive design.",
      live: "https://food-website-tau-six.vercel.app/",
      github: "https://github.com/Prajwalbuilds0625/food-website",
    },
    {
      title: "Tourism Website",
      category: "Frontend",
      image: tourism,
      tech: "HTML, CSS, Bootstrap",
      desc: "A tourism website showcasing places, packages, and attractive frontend sections.",
      live: "https://tourism-website-gold-three.vercel.app/",
      github: "https://github.com/Prajwalbuilds0625/tourism-website",
    },
    {
      title: "Bootstrap Project 1",
      category: "Bootstrap",
      image: boot1,
      tech: "HTML, CSS, Bootstrap",
      desc: "Responsive Bootstrap-based web layout with cards and sections.",
      live: "https://boot-strap-template.vercel.app/",
      github: "https://github.com/Prajwalbuilds0625/bootstrap-business-website",
    },
    {
      title: "Bootstrap Project 2",
      category: "Bootstrap",
      image: boot2,
      tech: "HTML, CSS, Bootstrap",
      desc: "Modern Bootstrap UI project focused on layout and responsiveness.",
      live: "https://bootstrap-template2-ruby.vercel.app/",
      github: "https://github.com/Prajwalbuilds0625/bootstrap-landing-page",
    },
    {
      title: "Bootstrap Project 3",
      category: "Bootstrap",
      image: boot3,
      tech: "HTML, CSS, Bootstrap",
      desc: "Bootstrap-based website design with clean UI components.",
      live: "https://bootstrap-template3.vercel.app/",
      github: "https://github.com/Prajwalbuilds0625/bootstrap-ui-project",
    },
    {
      title: "Hospital Management System",
      category: "React",
      image: hospital,
      tech: "React.js, Bootstrap, JavaScript",
      desc: "A hospital website interface with doctors, departments, appointments, and contact sections.",
      live: "https://hospital-management-system-pi-gules.vercel.app/",
      github: "https://github.com/Prajwalbuilds0625/hospital-management-system",
    },
    {
      title: "EventHub",
      category: "React",
      image: eventhub,
      tech: "React.js, Bootstrap, JavaScript",
      desc: "An event management website for viewing events, registration pages, login/register flow and event details.",
      live: "https://eventhub-rust-nu.vercel.app/",
      github: "https://github.com/Prajwalbuilds0625/eventhub",
    },
    {
      title: "Dashboard Analytics",
      category: "React",
      image: dashboard,
      tech: "React.js, Bootstrap, JavaScript",
      desc: "A dashboard interface with statistics cards, analytics sections, admin panels and responsive design.",
      live: "https://dashboard-analytics-cyan.vercel.app/",
      github: "https://github.com/Prajwalbuilds0625/dashboard-analytics",
    },
    {
      title: "Redux Counter Application",
      category: "Redux",
      image: counter,
      tech: "React.js, Redux Toolkit, Bootstrap",
      desc: "An interactive counter app with increment, decrement, reset and Redux state management.",
      live: "https://redux-counter-app-rose.vercel.app/",
      github: "https://github.com/Prajwalbuilds0625/redux-counter-app",
    },
    {
      title: "Add To Cart Website",
      category: "Redux",
      image: addtocart,
      tech: "React.js, Redux Toolkit, Bootstrap, jQuery",
      desc: "Shopping cart application with add to cart, quantity control, remove product, total price and order placement.",
      live: "https://add-to-cart-project-hazel.vercel.app/",
      github: "https://github.com/Prajwalbuilds0625/add-to-cart-project",
    },
    {
      title: "Smart Todo App",
      category: "Redux",
      image: todo,
      tech: "React.js, Redux Toolkit, Bootstrap",
      desc: "Task manager application with add, delete, update and complete task functionality.",
      live: "https://smart-todo-app-x4p6.vercel.app/",
      github: "https://github.com/Prajwalbuilds0625/smart-todo-app",
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const normalProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <p>Full Stack, React, Redux, Next.js and Database Projects</p>
        </div>

        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <div className="premium-project-card" key={index}>
              <div className="premium-project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="premium-project-content">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <h6>{project.tech}</h6>

                <div className="project-actions">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  )}

                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          {normalProjects.map((project, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="mini-project-card">
                <img src={project.image} alt={project.title} />

                <div className="mini-project-content">
                  <span>{project.category}</span>
                  <h4>{project.title}</h4>
                  <p>{project.desc}</p>
                  <h6>{project.tech}</h6>

                  <div className="project-actions">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        Live
                      </a>
                    )}

                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;