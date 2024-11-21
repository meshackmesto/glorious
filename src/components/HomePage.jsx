import React from 'react';
import './style/Homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import program_1 from '../assests/program1.jpg';
import program_2 from '../assests/program2.jpg';
import program_3 from '../assests/program3.jpg';
import program_icon_1 from '../assests/program_icon_1.png';
import program_icon_2 from '../assests/program_icon_2.png';
import program_icon_3 from '../assests/program_icon_3.png';
import about_img from '../assests/about_img.jpg';
import Gallery_img_1 from '../assests/Gallery_img1.jpg';
import Gallery_img_2 from '../assests/Gallery_img2.jpg';
import Gallery_img_3 from '../assests/Gallery_img3.jpg';
import Gallery_img_4 from '../assests/Gallery_img4.jpg';
import education_img_1 from '../assests/education_img.jpg';
import { faFacebook , faInstagram } from '@fortawesome/free-brands-svg-icons';
import Title from './Title/Title';
import { Link } from 'react-router-dom';




const HomePage = () => {
    

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4d171e69-69cc-49fd-b9c5-768c5dcde3a1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
    <div className='homepage container'>
        <div className='home-text'>
        <h1>Welcome to Glorious Dawn Montessori School </h1>
        <p>A school that values moral excellence and academic excellence has a teaching staff that is certified and a modern curriculum.</p>
        <Link to="/About"><button className='Home-btn'>
            Explore Now <FontAwesomeIcon  className="fa" icon={faArrowRight} />
            </button>
            </Link>
        </div>
    </div>
    <Title subTitle='WELCOME TO GLORIOUS DAWN' title='What We Offer' summary='Glorious Dawn Montessori School fosters 
            holistic development through a rich curriculum 
            that extends beyond academics. Our school offers 
            a vibrant array of extracurricular activities, 
            including art, music, and sports. Through art, 
            children explore creativity, express themselves,
             and develop fine motor skills. Music classe
             s nurture musical talent, enhance cognitive 
             abilities, and promote emotional well-being. 
             Sports programs encourage physical fitness, 
             teamwork, and a healthy lifestyle. By integrating
              these activities into our educational framework
               we empower children to reach their full potential in all aspects of life.'/>
    <div className='programs container'>
        <div className="program">
            <img src={program_1} alt='' />
            <div className="caption">
                <img src={program_icon_1} alt=''/>
                <p>Art Classes</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt='' />
            <div className="caption">
                <img src={program_icon_2} alt=''/>
                <p>Music Classes</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt='' />
            <div className="caption">
                <img src={program_icon_3} alt=''/>
                <p>Sports ACtivites</p>
            </div>
        </div>
    </div>
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt='' className='about-img' />
        </div>
        <div className="about-right">
            <h3>WHY CHOOSE GLORIOUS DAWN</h3>
            <h2>A Safe & Nurturing Learning Environment</h2>
            <p>Glorious Dawn Montessori School commenced its journey on January 23rd, 2024, and welcomed its first students for admission in February of the same year.
                Built upon Christian principles, our institution aims to establish a firm foundation in Christ for every child, drawing inspiration from Matthew 7:24-26.
            Our vision is to empower children with a profound understanding of the world and their place within it.
            </p>
            <p>
            At Glorious Dawn Montessori School, 
            we are committed to providing a nurturing and stimulating environment
            where children can thrive academically, socially, and 
            emotionally.
            </p>
        </div>
    </div>
    <Title subTitle='School Life' title='School Gallery'/>
    <div className="schoolLife">
        <div className="gallery">
            <img src={Gallery_img_1} alt='' />
            <img src={Gallery_img_2} alt='' />
            <img src={Gallery_img_3} alt='' />
            <img src={Gallery_img_4} alt='' />
        </div>
        <Link className='Home-btn dark-btn' to='/schoolLife'>
        See more here <FontAwesomeIcon  className="fa" icon={faArrowRight} />
        </Link>
    </div>
    <Title subTitle='An inspired school' title='Expanding the bounds of learning'/>
    <div className="education">
        <div className="education-left">
            <h3>ENGAGING AND COMPREHENSIVE CURRICULUM</h3>
            <h2>Montessori Education</h2>
            <p>Montessori education expands the boundaries of 
                learning by embracing a child-centered approach that 
                fosters independence, curiosity, and a love of learning. By providing a carefully prepared environment and age-appropriate materials, Montessori classrooms encourage children to explore,
                 experiment, and discover at their own pace.</p>
            <p>
            Through hands-on activities and self-directed learning,
            Montessori education cultivates critical thinking, 
            problem-solving skills, and a lifelong passion for 
            knowledge. Children are empowered to become active 
            learners, constructing their understanding
             of the world through exploration and discovery.
            </p>
        </div>
        <div className="education-right">
            <img src={education_img_1} alt='' className='education-img' />
        </div>
    </div>
    <Title subTitle='Contact Us' title='Get in touch'/>
    <div className="contact">
    <div className="contact-col">
        <h3>Send us a message <FontAwesomeIcon icon={faEnvelope}  className='fa-icon'/></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our montessori community.</p>
        <ul>
            <li> <FontAwesomeIcon icon={faEnvelope} className='fa-icons' />ContactUs@gloriousdawnmontessorischool@gmail.com </li>
            <li> <FontAwesomeIcon icon={faPhone} className='fa-icons'/>+254727255986 | +254720254745</li>
            <li><FontAwesomeIcon icon={faLocationDot}className='fa-icons' />Community Road, Syokimau,<br/>
            Nairobi, Kenya</li>
            <li> <a href='https://www.facebook.com/share/zbRzGFz6CcDUEmx8/?mibextid=LQQJ4d'>
            <FontAwesomeIcon icon={faFacebook} className='fa-icons'/> Facebook
        </a></li>
            <li>    <a href='https://www.instagram.com/gloriousdawnmontessorischool_/'>
            <FontAwesomeIcon icon={faInstagram} className='fa-icons'/>  Instagram
        </a>
        </li>
        </ul>
</div>
<div className="contact-col">
    <form onSubmit={onSubmit}> 
        <label>Your name</label>
        <input type="text" name="name" placeholder='Enter your name' required/>
        <label>Phone Number</label>
        <input type="text" name="phone" placeholder='Enter your phone number' required/>
        <label>Email</label>
        <input type="text"  name='Enmail' placeholder='Enter your Email' required/>
        <label>Write your messages here</label>
        <textarea name="message" rows="10" cols="30" placeholder='Enter your message' required></textarea>
        <button type='submit' className='btn Home-btn dark-btn'>Submit Now <FontAwesomeIcon  className="fa" icon={faArrowRight} /></button>
    </form>
    <span>{result}</span>
    </div>
</div>
    </>
  )
}

export default HomePage;