import React from 'react';
import './style/SchoolLife.css';
import Title from './Title/Title';
import schoollife_img from '../assests/schoollife_img.jpg';
import art_img_1 from '../assests/art_img_1.jpg';
import art_img_2 from '../assests/art_img_2.jpg';
import art_img_3 from '../assests/art_img_3.jpg';
import nutrition_img from '../assests/nutrition_img.jpg';
import music_img_1 from '../assests/music_img_1.jpg';
import music_img_2 from '../assests/music_img_2.jpg';
import music_img_3 from '../assests/music_img_3.jpg';
import culture_img from '../assests/culture_img.jpg';
import sports_img_1 from '../assests/sports_img_1.jpg';
import sports_img_2 from '../assests/sports_img_2.jpg';
import sports_img_3 from '../assests/sports_img_3.jpg';

const SchoolLife = () => {
  return (
    <>
    <div className='main-schoollife'>
        <h1>School Life</h1>
    </div>
    <div className="schoollife-hero">
      <div className="schoollife-left">
        <h3>Our School Day</h3>
        <h2>Learning Through Play at Glorious Dawn Montessori School.</h2>
        <p>Glorious Dawn Montessori School offers a vibrant and engaging playground experience, designed to spark imagination and promote physical development. Our playground is equipped with a variety of stimulating play equipment, including slides, swings, climbing structures, and sandpits. Children can engage in imaginative play, develop social skills, and burn off energy in a safe and fun environment. Our playground also features a dedicated area for outdoor learning, where children can explore nature, conduct experiments, and connect with the natural world.</p>
      </div>
      <div className="schoollife-right">
        <img src={schoollife_img} alt='' />
      </div>
    </div>
    <Title subTitle='Art: A Canvas of Imagination' title='Nurturing creativity, fostering expression, and developing fine motor skills.' summary='At Glorious Dawn Montessori School, art is more than just a subject; its a language of expression. Our art program encourages children to explore their creativity through a variety of mediums, including painting, drawing, sculpting, and collage. Through art, children develop fine motor skills, problem-solving abilities, and a deep appreciation for beauty.' />
    <div className="art container">
        <div className="arts">
            <img src={art_img_1} alt='' />
        </div>
        <div className="arts">
            <img src={art_img_2} alt='' />
        </div>
        <div className="arts">
            <img src={art_img_3} alt='' />
        </div>
    </div>
    <div className="nutrition">
        <div className="nutrition-left">
            <img src={nutrition_img} alt='' className='nutrition-img'/>
        </div>
        <div className="nutrition-right">
        <h3>Nutrition: Nourishing Young Minds</h3>
        <h2>Promoting healthy eating habits</h2>
        <p>Fostering a lifelong appreciation for nutritious food.</p>
        <p>We believe that good nutrition is essential for a child's physical and mental well-being. Our school promotes healthy eating habits by offering nutritious meals and snacks. We teach children about the importance of balanced diets, portion control, and making informed food choices. Through cooking activities, children learn about food preparation, nutrition, and cultural diversity.</p>
        </div>
    </div>
    <Title subTitle='Music: A Harmony of Learning' title='Cultivating musical talents, enhancing cognitive abilities, and promoting emotional well-being.' summary='Music is an integral part of our holistic approach to education. Our music program exposes children to a wide range of musical styles, from classical to contemporary. Through singing, playing instruments, and listening to music, children develop a strong sense of rhythm, pitch, and melody. Music also fosters emotional intelligence, cognitive development, and social skills.' />
    <div className='music-page conatiner'>
      <div className="music">
        <img src={music_img_1} alt='' />
      </div>
      <div className="music">
        <img src={music_img_2} alt='' />
      </div>
      <div className="music">
        <img src={music_img_3} alt='' />
      </div>
    </div>
    <div className="culture">
      <div className="culture-left">
      <h3>A Christ-Centered Education</h3>
      <h2>Nurturing Faith and Knowledge</h2>
      <p>Glorious Dawn Montessori School is a Christ-centered institution that integrates Christian values into our curriculum. We strive to instill a strong moral foundation in our students, teaching them to love God, love others, and love themselves. Through daily chapel services, Bible studies, and character education, we aim to develop well-rounded individuals who are spiritually, intellectually, and emotionally prepared for life's challenges.</p>
      </div>
      <div className="culture-right">
        <img src={culture_img} alt='' />
      </div>
    </div>
    <Title subTitle='Playful Learning, Healthy Growth' title='Active Minds, Healthy Bodies' summary='Our Montessori sports program fosters physical development, teamwork, and a love of movement. Through engaging activities like soccer andbasketball, children develop coordination, strength, and agility. We emphasize participation, enjoyment, and skill development over competition, creating a positive and supportive learning environment.' />
    <div className="sport container">
        <div className="sports">
            <img src={sports_img_1} alt='' />
        </div>
        <div className="sports">
            <img src={sports_img_2} alt='' />
        </div>
        <div className="sports">
            <img src={sports_img_3} alt='' />
        </div>
    </div>
    </>
  )
}

export default SchoolLife