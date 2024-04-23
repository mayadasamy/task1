import React from 'react'
import './css/Footer.css'
import { Link } from 'react-router-dom'
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import twitter from './images/twitter.png'
import linkedin from './images/linkedin.png'
import phone from './images/old-typical-phone.png'
import email from './images/message.png'
import location from './images/3d-map.png'


const Footer = () => {
  return (
    


    <>
  <div className="container_contact" id="contact">
      <div className="row">


                <div className="col_left">
                  <div className="contactTitle">
                    <h2>Get In Touch</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
                      dignissimos officiis animi.</p>
                  </div>
                  <div className="contactInfo">
                    <div className="iconGroup">
                      <div className="icon">
                        <img src={phone} alt='' />
                      </div>
                      <div className="details">
                        <span>phone : </span>
                        <span>+123 456 789</span>
                      </div>
                    </div>

                    <div className="iconGroup">
                      <div className="icon">
                      <img src={email} alt='' />
                      </div>
                      <div className="details">
                        <span>Email : </span>
                        <span>name@gmail.com</span>
                      </div>
                    </div>

                    <div className="iconGroup">
                      <div className="icon">
                      <img src={location} alt='' />
                      </div>
                      <div className="details">
                        <span>Location : </span>
                        <span>x street, y street , NewYork</span>
                      </div>
                    </div>
                  </div>

                  <div className="socialMedia">
                    <Link to="#"><img src={facebook} alt=''/></Link>
                    <Link to="#"><img src={instagram} alt=''/></Link>
                    <Link to="#"><img src={twitter} alt=''/></Link>
                    <Link to="#"><img src={linkedin} alt=''/></Link>
                  </div>

                </div>



                <div className="col_right">

                  <div action="" className="messageForm">
                    <div className="inputGroup halfWidth">
                      <input type="text"  required="required"/>
                      <label htmlFor="">Your Name</label>
                    </div>
                    <div className="inputGroup halfWidth">
                      <input type="email"  required="required"/>
                      <label htmlFor="">Email</label>
                    </div>
                    <div className="inputGroup fullWidth">
                      <input type="text"  required="required"/>
                      <label htmlFor="">subject</label>
                    </div>
                    <div className="inputGroup fullWidth">
                      <textarea required="required" ></textarea>
                      <label htmlFor="">write something ..</label>
                    </div>
                    <div className="inputGroup fullWidth">
                      <button className="send">Send Message</button>
                    </div>
                    
                  </div>

                </div>
      </div>

 

  </div>
  </>



      
    
  )
}

export default Footer
