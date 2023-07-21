import React from 'react'
import "./experience.css"
import twowaits from "../../assets/twowaits_logo.png";
import byte from "../../assets/byte_logo.png";
import opensource from "../../assets/opensource_logo.png";

export default function Experience() {
  return (
    <section className="experience container section" id="experience">
      <h2 className="section__title">Experience</h2>
      
      <div className="experience__container grid">

        
        <div className="experience__item">
          {/* <img src={opensource} alt="" width="80" className="experience__img"></img> */}
          <h3 className="experience__title"> Web Developer Intern</h3>
          <h4 className="subtitle">DesiQnA</h4>
          <ul>
            <li className="experience__description">• Worked on the Complete Designing and Development of the Fully Responsive website.</li>
            <li className="experience__description">• Uploading Jobs and Interview Experience Section on the Website.</li>
            <li className="experience__description">• Integrated Recaptcha with website - Google Layer of Protection for websites.</li>
          </ul>
        </div>

       

      </div>
    </section>
  )
}
