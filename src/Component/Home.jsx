import React from "react";
import home from "../images/home.svg";


function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <h1 className="heading">
            Hi There! <span className="wave">👋</span>
          </h1>
          <h1 className="heading-name">
            I'm <span className="purple">Yasir Azeem</span>
            <br />
            <span className="sm">
              with a <br /> great team!
            </span>
          </h1>
          <div className="services">
            <p> we are specialized in:</p>
          </div>

          <div className="Typewriter__wrapper">
            <span id="element"></span>
            <span >
              Full-Stack Python <br /> Development
            </span>
          </div>
          <p>Python, Django , Scripts , Apps, Crypto Automation</p>
          <div className="Typewriter__wrapper">
            <span>
              Web Scraping <br /> Solutions
            </span>
          </div>
          <p>Web Scrapers , Crawlers, Python , Selenium ,Scrapy</p>
          <div className="Typewriter__wrapper">
            <span>
              Development of <br /> Cryptocurrency
            </span>
          </div>
          <p>Cryptocurrency & Forex Trading Telegram bots</p>
          <div className="Typewriter__wrapper">
            <span>Machine- Learning</span> Artificial Intelligence <br />Development
          </div>
          <p>
            Machine Learning , Gpt, Computer vision,Nlp with Python,
            API
          </p>
          <div className="Typewriter__wrapper">
            <span>Desktops Applications</span>
          </div>
          <p>Dynamic Telegram Bot, MERN stack</p>
        </div>
        <div className="col-md-5">
          <img src={home} alt="home-pic" className="img-fluid" />
          <div className="text-center">
            <div className="text-right">
              Give me a ThumbsUp</div>
            <div className="btn-like">👍</div>
            {/* <div className="error-message">
              ffS
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
