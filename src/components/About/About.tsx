import React from "react";
import "./About.css";
import heroImg from "../../assets/hero-section.png";

function About() {
  const features = [
    { icon: "✔", text: "We win reliability best practices" },
    { icon: "⚡", text: "We focus on growing our business" },
    { icon: "⏳", text: "We focus on the 90% of features everyone uses" },
    { icon: "📊", text: "We are financially stable and open our stats" }
  ];

  return (
    <section className="about">

      {/* HERO SECTION */}
      <div className="hero-section">
        <div className="hero-text">
          <p className="tag">About us</p>
          <h1>
            We are bringing magic back <br />
            to software
          </h1>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="hero design" />
        </div>
      </div>
      
{/* lsjfsflf */}

      {/* MISSION SECTION */}
      <div className="mission-section">
        <div className="mission-left">
          <p className="tag">Our Value</p>
          <h2>
            Our mission is to improve <br />
            the way people think
          </h2>
        </div>
        <div className="mission-right">
          <p>
            What started as a simple issue tracker has evolved
            into a powerful project and issue tracking system.
          </p>
          <p>
            Today thousands of teams rely on modern tools to
            build better products and improve collaboration.
        
          </p>
        </div>
      </div>

      {/* RELIABILITY SECTION */}
      <div className="reliability-section">
        <div className="reliability-left">
          <p className="tag">Reliability</p>
          <h3>Reliability</h3>
          <p>
            Too many companies chase venture capital and grow unsustainably.
          </p>
        </div>

        <div className="reliability-features">
          {features.map((feature, index) => (
            <div className="feature-box" key={index}>
              <span>{feature.icon}</span>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default About;