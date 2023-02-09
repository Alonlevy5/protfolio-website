import React from 'react';
import './about.css';
import ME from '../../assets/me2.jpg';
import { FaAward, FaUserGraduate } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5 Years Working</small>
            </article>
            <article className="about__card">
              <FaUserGraduate className="about__icon" />
              <h5>BSc Computer Science</h5>
              <small>GPA(86)</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>Done Over 21 Projects</small>
            </article>
          </div>
          <p>
            🚀 I am a driven web developer with a love for creating amazing web
            applications that make a difference in people's lives. Currently, I
            am on a mission to find my next career opportunity as a web
            developer and to continue learning, exploring, and working with
            cutting-edge technologies. <br/>🎓 My educational background includes a
            Bachelor's degree in Computer Science, with a solid GPA of 86, that
            has equipped me with a strong foundation in computer science
            concepts. <br/>💙 My passion lies in full-stack web development and I am
            always eager to learn new technologies and expand my skillset. <br/>👨‍💻
            With experience in a range of technologies such as JavaScript,
            React, Redux, Node.js, and more, I am confident in my ability to
            contribute to any project and bring value to any team. <br/>💻 Let's
            build something amazing together!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
