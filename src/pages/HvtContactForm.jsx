import React, { useState } from 'react';
import '../pagesCss/HvtContactForm.css';
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaTwitter as FaXTwitter } from "react-icons/fa";

const HvtContactForm = () => {
  const [focus, setFocus] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const handleFocus = (e) => {
    setFocus({ ...focus, [e.target.name]: true });
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setFocus({ ...focus, [e.target.name]: false });
    }
  };

  return (
    <div className="new-container">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="new-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <img src="/assets/location.jpeg" className="icon" alt="" />
              <p>Xyz Vrindavan near Prem mandir</p>
            </div>
            <div className="information">
              <img src="/assets/email.jpeg" className="icon" alt="" />
              <p>holyvrindavantour@gmail.com</p>
            </div>
            <div className="information">
              <img src="/assets/phone.jpeg" className="icon" alt="" />
              <p>+91 6399778850</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="https://x.com/HolyTour42005?t=na70tSgwk3iQGGnXi4uNfA&s=09" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
              <a href="https://www.instagram.com/holyvrindavantour?igsh=MWg5dDNyaThncDFtNQ==" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
              
              <a href="" target="_blank" rel="noopener noreferrer">
                <img src="/assets/Zwolf.jpeg" className="zwolf" alt="Zwolf" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className={`input-container ${focus.name ? 'focus' : ''}`}>
              <input
                type="text"
                name="name"
                className="input"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <label>Name</label>
              <span>Name</span>
            </div>
            <div className={`input-container ${focus.email ? 'focus' : ''}`}>
              <input
                type="email"
                name="email"
                className="input"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <label>Email</label>
              <span>Email</span>
            </div>
            <div className={`input-container ${focus.phone ? 'focus' : ''}`}>
              <input
                type="tel"
                name="phone"
                className="input"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <label>Phone</label>
              <span>Phone</span>
            </div>
            <div className={`input-container textarea ${focus.message ? 'focus' : ''}`}>
              <textarea
                name="message"
                className="input"
                placeholder="Message (Optional)"
                
                // onFocus={handleFocus}
                onBlur={handleBlur}
              ></textarea>
              <span>Message</span>
            </div>
            <button type="button" className="btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HvtContactForm;
