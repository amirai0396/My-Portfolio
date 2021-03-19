import React from 'react';
import aboutMe from '../images/aboutMe.jfif';
import '../Styles/_About.styles.scss';

function ImageSection() {
  return (
    <div className='ImageSection'>
      <div className='img'>
        <img src={aboutMe} alt={aboutMe} />
      </div>
      <div className='about-info'>
        <h4>
          I am <span>AMI RAI</span>
        </h4>
        <p>
          I've studied computer science from SRM institute of science and
          technology <br /> and I'm a Front-End Developer <br />
          who has serious passion for UI effects, <br /> animations and creating
          intuitive, <br />
          dynamic user experiences.
        </p>
        <div className='about-details'>
          <div className='left-section'>
            <p>Full Name :</p>
            <p>Age :</p>
            <p>Nationality :</p>
            <p>Languages :</p>
            <p>Hometown :</p>
          </div>
          <div className='right-section'>
            <p> AMI RAI</p>
            <p> 23</p>
            <p> Indian</p>
            <p> English,Hindi</p>
            <p> Uttar Pradesh</p>
          </div>
        </div>
        <button className='btn'>Download Cv</button>
      </div>
    </div>
  );
}
export default ImageSection;
