import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaEnvelope,
  FaWhatsapp
} from "react-icons/fa";
import { useEffect, useState } from "react";
import profile from "./assets/profile.jpg";

export default function App() {
  const [active, setActive] = useState("home");
  const [pageLoaded, setPageLoaded] = useState(false);

  /* ---------- Typing Animation ---------- */
  const roles = ["Frontend Developer", "MERN Learner"];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setText(roles[roleIndex].slice(0, charIndex + 1));
      setCharIndex(charIndex + 1);

      if (charIndex === roles[roleIndex].length) {
        setTimeout(() => {
          setCharIndex(0);
          setRoleIndex((roleIndex + 1) % roles.length);
          setText("");
        }, 1400);
      }
    }, 110);

    return () => clearTimeout(timer);
  }, [charIndex, roleIndex]);

  /* ---------- Page Load ---------- */
  useEffect(() => {
    setTimeout(() => setPageLoaded(true), 100);
  }, []);

  /* ---------- Scroll Spy ---------- */
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollY = window.scrollY + 160;

      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (
          el &&
          el.offsetTop <= scrollY &&
          el.offsetTop + el.offsetHeight > scrollY
        ) {
          setActive(sec);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------- Scroll Animations ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.isIntersecting
            ? entry.target.classList.add("show-section")
            : entry.target.classList.remove("show-section");
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".animate-section").forEach((sec) => {
      observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className={`navbar ${pageLoaded ? "show" : ""}`}>
        <h3 className="brand">Sagar</h3>
        <ul>
          <li className={active === "home" ? "active" : ""} onClick={() => scrollTo("home")}>Home</li>
          <li className={active === "about" ? "active" : ""} onClick={() => scrollTo("about")}>About</li>
          <li className={active === "skills" ? "active" : ""} onClick={() => scrollTo("skills")}>Skills</li>
          <li className={active === "projects" ? "active" : ""} onClick={() => scrollTo("projects")}>Projects</li>
          <li className={active === "contact" ? "active" : ""} onClick={() => scrollTo("contact")}>Contact</li>
        </ul>
      </nav>

      {/* ================= HERO ================= */}
      <section id="home" className={`hero ${pageLoaded ? "show" : ""}`}>
        <div className="left-social">
          <a href="https://www.linkedin.com/in/jhaasagar" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/sagarjha33" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="mailto:jhaasagar33@gmail.com"><FaEnvelope /></a>
          <a href="https://wa.me/917278527233" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          <a href="https://t.me/sagarjha33" target="_blank" rel="noreferrer"><FaTelegramPlane /></a>
        </div>

        <div className="hero-text">
          <h1>
            Hi, I am <br /> <span>Sagar Jha</span>
          </h1>

          <h3 className="typing">{text}</h3>

          <p>
            A Computer Science student focused on building modern,
            responsive and user-friendly web applications.
          </p>

          <div className="hero-buttons">
            <button className="cta" onClick={() => scrollTo("contact")}>
              Contact Me
            </button>

            <a
              href="/resume/Sagar_Jha_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="cta resume-btn"
            >
              Resume
            </a>
          </div>

          <div className="scroll" onClick={() => scrollTo("about")}>
            <span className="mouse"></span>
            Scroll Down ↓
          </div>
        </div>

        <div className="hero-img">
          <div className="blob">
            <img src={profile} alt="Sagar Jha profile" />
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="section animate-section">
        <h2>About Me</h2>
        <p>
          I enjoy learning new technologies, solving problems, and building
          real-world projects with clean UI and good user experience.
        </p>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="section animate-section">
        <h2>Skills</h2>
        <div className="skills">
          <span>C</span><span>C++</span><span>Java</span><span>Python</span>
          <span>HTML</span><span>CSS</span><span>JavaScript</span><span>React</span>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section animate-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src="/projects/travel.png" alt="Travel Website" />
            <h3>Travel Website</h3>
          </div>
          <div className="project-card">
            <img src="/projects/weather.jpg" alt="Weather App" />
            <h3>Weather App</h3>
          </div>
        </div>
      </section>

      {/* ================= CONTACT (FORM WORKING) ================= */}
      <section id="contact" className="section animate-section">
        <h2>Contact Me</h2>

        <form
          className="contact-form"
          action="https://formspree.io/f/mkonddar"
          method="POST"
        >
          {/* 🔒 Email subject */}
          <input
            type="hidden"
            name="_subject"
            value="New Portfolio Message 🚀"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
}
