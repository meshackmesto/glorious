import React from 'react'
import './style/Contact.css';
import contact_img from '../assests/contact_img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <>
    <div className='main-contact'>
      <h1>Contact</h1>
      </div>
    <div className="contact-hero">
      <div className="contact-left">
        <h2>Get in Touch</h2>
        <p>Want to collaborate or just say hi? I'd love to hear from you!</p>
        <p>Want to learn more about Glorious Dawn Montessori School? We invite you to contact us to schedule a tour, ask questions, or enroll your child. Our friendly and knowledgeable staff is here to assist you and provide all the information you need. You can reach us by phone, email, or by visiting our school. Let us guide you through the exciting journey of Montessori education. 
        </p>
      </div>
      <div className="contact-right">
        <img src={contact_img} alt='' className='contact-img'/>
      </div>
    </div>
    <div className="contact-form">
        <div className="contact-form-left">
        <form>
          <input type="text" placeholder='Your Name' />
          <input type="text" placeholder='Your Email' />
          <label>Write your messages here</label>
        <textarea name="message" rows="10" cols="30" placeholder='Enter your message' required></textarea>
        <button type='submit' className='btn Home-btn nid dark-btn'>Send Feedback<FontAwesomeIcon  className="fa" icon={faArrowRight} /></button>
        </form>
        </div>
        <div className="contact-form-right">
            <h3>Our Mission</h3>
            <p>**Our mission is to provide a nurturing and supportive environment that fosters confidence,allowing them to explore,learn and develop essential social and emotional skills.</p>
        <h3>Our Vision</h3>
        <p>**Our vision is to empower children with a profound understanding of the world and their place within it.**
        </p>
        </div>
      </div>
    </>
  )
}

export default Contact