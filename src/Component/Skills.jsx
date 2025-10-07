import React from "react";
import { NavLink } from "react-router-dom";
import map from "../images/map.png";
import home from "../images/home.png";

const Skills = () => {
  return (
    <div className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-7 ">
            <h1>Who Know</h1>
            <strong className="purple">I'M</strong>
            <div className="qoute-card-view card">
              <div className="card-body">
                <blockquote className="blockqoute mb-0">
                  <p>
                    I am <span className="purple"> Muhammad Yasir Azeem</span>{" "}
                    with
                    <span className="purple"> 10+ years</span> of exprience in{" "}
                    <span className="purple">Python Developer </span> with
                    skills in
                    <span className="purple"> Data Science [ML and AI]</span>,
                    Database Management, Data Extraction/Web Scraping and API
                    creation. I'm a full-stack developer in JavaScript/NodeJS
                    technologies and completed
                    <span className="purple">500+</span> projects on{" "}
                    <span className="purple">Fiverr</span>. I am most
                    experienced in developing full-stack & cross-platform
                    applications using the most modern technologies like
                    JavaScript, TypeScript, ReactJS, NextJS, NodeJS, ExpressJS,
                    MongoDB, Firebase, ElectronJS, React-Native, & Ionic-React
                    framework. I am proficient in managing deployments on VPS,
                    Heroku, Netlify, Vercel, AWS, GCP, DigitalOcean, CI/CD, and
                    GitHub repositories. With a deep understanding of
                    application architecture, standards, and best practices, I
                    excel in writing robust, secure, scalable, and reusable
                    code.
                    <br />
                    <br />
                    Currently, I lead a team of top-tier developers on leading
                    freelance platforms such as{" "}
                    <span className="purple">Upwork</span> &{" "}
                    <span className="purple">Fiverr</span>.
                    <br />
                    Having prior expertise in C#.NET, ASP.NET, AWS, WebForms,
                    MVC, Web API, Entity Framework, Git, SQL, SQLite, C/C++,
                    XAML, WPF, JQuery, Ajax, PWAs, & SPAs, I am the optimal
                    choice for tasks involving these technologies.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-5 about-img">
            <img src={home} alt="about-pic" className="img-fluid" />
          </div>
        </div>
        <h1 className="project-heading">
          We are <span className="purple">Global</span>
        </h1>
        <p>Map source:Fiverr</p>
        <img src={map} alt="about" className="img-fluid" />
        <h1 className="project-headings">
          Our Customers <span className="purple">Reviews</span>
        </h1>
        <p>
          Here,are 50+ random reviews of 680+ totals reviews on Fiverr.(Reviews
          source:) 
          <NavLink to="/">Fiverr</NavLink>
        </p>
        <div className="section_title center">
          <p>Why You Choose Me</p>
          <h2>My Experience </h2>
        </div>
      </div>
      <br />
      <br />
      <div className="experience-items">
        <div className="experience-item">
          <div className="experience-info">
            <p>Full Stack Python Developer</p>
            <p>98%</p>
          </div>
          <div className="progress-line" data-percent="98%">
            <span className="animate" style={{ width: "98%" }}></span>
          </div>
        </div>
        <div className="experience-item">
          <div className="experience-info">
            <p>Web Scraping</p>
            <p>90%</p>
          </div>
          <div className="progress-line" data-percent="90%">
            <span className="animate" style={{ width: "90%" }}></span>
          </div>
        </div>
        <div className="experience-item">
          <div className="experience-info">
            <p>Machine Learning Artificial Intelligence</p>
            <p>88%</p>
          </div>
          <div className="progress-line" data-percent="88%">
            <span className="animate" style={{ width: "88%" }}></span>
          </div>
        </div>{" "}
        <div className="experience-item">
          <div className="experience-info">
            <p>Development of Cryptocurrency</p>
            <p>50%</p>
          </div>
          <div className="progress-line" data-percent="50%">
            <span className="animate" style={{ width: "50%" }}></span>
          </div>
        </div>
        <div className="experience-item">
          <div className="experience-info">
            <p>Deskstop Application</p>
            <p>79%</p>
          </div>
          <div className="progress-line" data-percent="79%">
            <span className="animate" style={{ width: "79%" }}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
