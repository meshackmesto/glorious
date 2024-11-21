import React from 'react';
import './style/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import main_about_img from '../assests/main_about_img.jpg';
import response_img from '../assests/response_img.jpg';
import VideoPlayer from '../components/VideoPlayer';




const About = ({playState,setPlayState}) => {
  return (
    <>
    <div className="main-about">
      <h1>About Us</h1>
    </div>
    <div className="about-hero">
    <div className="main-about-left">
      <img src={main_about_img} alt="About Us" className='main-about-img' />
      <FontAwesomeIcon icon={faPlayCircle} onClick={() =>{
        setPlayState(true);
      }} className='fa-play'/>
    </div>
    <div className="main-about-right">
            <h3>About our school</h3>
            <h2>Passionate, experienced, and dedicated</h2>
            <p>
            Glorious Dawn Montessori School is a vibrant educational institution founded on Christian principles. It is dedicated to providing a nurturing and stimulating learning environment where children can explore, discover, and develop their full potential. Through the Montessori method, children are encouraged to learn independently and at their own pace, fostering a love of learning and a sense of curiosity. The school offers a range of activities, including art, music, and sports, to promote holistic development and a well-rounded education. With a focus on character development and academic excellence, Glorious Dawn Montessori School aims to equip children with the knowledge, skills, and values needed to succeed in life. 

            </p>
            <p>
            Glorious Dawn Montessori School is committed to providing a nurturing and stimulating learning environment where children can thrive. Our dedicated team of educators guides young minds through a carefully designed curriculum that encourages independence, creativity, and critical thinking. By fostering a love of learning, we empower children to reach their full potential and become confident, well-rounded individuals. 

            </p>
    </div>
    </div>
    <div className="about-response">
    <div className="about-response-left">
    <h3>Miss Edith</h3>
    <h2>Director</h2>
      <p>I am a passionate educator dedicated to fostering a love of learning in young minds. As the Director of Glorious Dawn Montessori School, I strive to create a nurturing and stimulating environment where children can explore, discover, and grow. Our Montessori approach empowers children to learn independently and at their own pace, fostering creativity, critical thinking, and a lifelong love of learning. 
      </p>
    </div>
    <div className="about-response-right">
    <img src={response_img} alt='' className='about-response-img'/>
    </div>
    </div>
    <VideoPlayer playState={playState} setPlayState={setPlayState}
    videoType="youtube"
    videoId="YE-nzwGdayI"
    />
    </>
    )
}

export default About