import React from 'react';
import './about.css';
import Contact from '../Contact/Contact'

const About = () => {
  return (
    <section id="about">
      <div className="intro">
        <h2>Let me introduce myself</h2>
        <p>Hi, I&#39;m Ciara! I&#39;m an adventurous, risk-taker who seeks a creative challenge. I have always been an eager learner who loves to tackle any problem and can quickly assimilate new technologies. My journey into the ever-changing tech world started with my passion to use my creativity in a versatile yet impactful way. Due to my attention-to-detail and organization I&#39;m a stickler for crafting clean code to produce beautifully designed web and mobile applications. My goal is to create practical and memorable user experiences that are accessible to everyone.</p>
      </div>
      <div className="credentials">
      <div className="skills">
        <h2>Technical Skills</h2>
        <p>HTML / CSS / Sass / UX & UI Design / Sketch / Responsive Design / JavaScript / jQuery / React / React Native / Git & Github / Webpack Configuration / Wireframing / InVision</p>
      </div>
      <Contact />
      </div>  
    </section>
  )
}

export default About;