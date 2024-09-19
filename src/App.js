import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Touqeer Abbas</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>Hi! Touqeer Abbas, a passionate Computer Science student specializing in computer science master degree. I have a deep curiosity for problem-solving and developing innovative solutions using technology.</p>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <ul>
                <li>Python</li>
                <li>Java</li>
                <li>C++</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Web Development</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Database Management</h3>
              <ul>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools & Frameworks</h3>
              <ul>
                <li>Git</li>
                <li>Docker</li>
                <li>Jupyter Notebooks</li>
                <li>Django</li>
                <li>Node.Js</li>
                <li>Laravel</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>AI/ML & Data Science</h3>
              <ul>
                <li>TensorFlow</li>
                <li>Scikit-learn</li>
                <li>Pandas</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>Project 1 - Sentiment Analysis of Urdu Text (NLP)</h3>
            <p>Developed a sentiment analysis model for Urdu text, focusing on accurately classifying sentiments using Natural Language Processing techniques. The project highlights my expertise in processing low-resource languages.</p>
          </div>
          <div className="project">
            <h3>Project 2 - Employee Data Analysis (Data Analytics)</h3>
            <p>Analyzed employee data to derive key insights, where the predictive model achieved high accuracy. This project showcases my skills in data preprocessing, model building, and performance optimization.</p>
          </div>
          <div className="project">
            <h3>Project 3 - Twitter Data Analysis for Peshawar University</h3>
            <p>Conducted a community detection analysis on Twitter data related to Peshawar University, identifying influential nodes. Used advanced clustering and machine learning algorithms to uncover meaningful patterns and trends.</p>
          </div>
          <div className="project">
            <h3>Project 4 - Web Development with Python & Django</h3>
            <p>Built multiple web applications using Django, covering a range of functionalities from basic sites to complex systems. You can explore these projects on my GitHub.</p>
          </div>
          <div className="project">
            <h3>Project 5 - React Application Development</h3>
            <p>Created several React-based applications that demonstrate my front-end development expertise. Visit my GitHub to view these projects.</p>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Let's connect! Feel free to reach out through any of these platforms:</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/touqeer-abbas399" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Abbastouqi?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:tabbas@cs.qau.edu.pk" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://wa.me/+923271002409" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://techbbaslog.blogspot.com/" target="_blank" rel="noopener noreferrer" aria-label="Blogspot">
              <i className="fab fa-blogger-b"></i>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
