import React from "react";
import AboutImage from "../component/images/aboutImage.jpg";
import "./css/About.css";


const About = () => {
  return (
    <>
      <div  className="about-us">
        <div className="text-about-us" data-aos="fade-down">
          <h1>
            About Us
          </h1>
          <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quasi minus 
          temporibus autem quia error, a amet pariatur fugiat accusantium.
          </p>
        </div>
        <div className="container_about">
          <div className="img-text-about">
            <div data-aos="fade-right" className="img-about">
              <img src={AboutImage} alt=""></img>
            </div>
            <div data-aos="fade-left" className="text-about">
              <h2>we Are Reese Miller </h2>
              <p>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Minus explicabo fugit corrupti ipsa earum officiis nesciunt corporis saepe dolorum esse.
              </p>
              <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sed. Nam ipsam
                molestias porro alias consequuntur rerum distinctio eos, iste, veritatis dolor rem recusandae 
                similique debitis numquam, ea illum fuga?.
              </p>
              <button className="about_btn">View All</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;