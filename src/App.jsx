export default function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h3 className="logo">Sagar Jha</h3>

        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>
          Hi, I'm <span>Sagar Jha</span>
        </h1>
        <p>A passionate learner and programmer.</p>
      </section>

      {/* About */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I enjoy building simple and meaningful projects while improving my coding
          skills every day. I’m interested in learning modern web development and
          building real-world applications.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <ul>
          <li>C</li>
          <li>C++</li>
          <li>Java (Basic)</li>
          <li>Python</li>
        </ul>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Travel Website</h3>
          <p>
            A website that helps users explore travel destinations, view details,
            and plan trips easily.
          </p>
          <p>
            <strong>Tech:</strong> HTML, CSS, JavaScript (can upgrade to MERN later)
          </p>

          <div className="buttons">
            <a href="#" target="_blank" rel="noreferrer">View Demo</a>
            <a href="#" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Email: your@email.com</p>
      </section>
    </div>
  );
}
