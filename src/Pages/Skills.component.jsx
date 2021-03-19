import React from 'react';
import Tittle from '../Components/Title.component';
import SkillsSection from '../Components/Skills-section.component';
import ServicesSection from '../Components/ServiceSection.component';
import webDevelopment from '../images/webDevelopment.png';
import Mobile from '../images/mobile.png';
import design from '../images/design.png';

function SkillsPage() {
  return (
    <div>
      <Tittle title={'My Skills'} span={'My Skills'} />
      <div className='skillsContainer'>
        <SkillsSection skill={'HTML'} progress={'90%'} width={'90%'} />
        <SkillsSection skill={'CSS'} progress={'85%'} width={'85%'} />
        <SkillsSection skill={'JAVASCRIPT'} progress={'70%'} width={'70%'} />
        <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
        <SkillsSection skill={'REDUX'} progress={'40%'} width={'40%'} />
        <SkillsSection skill={'WORDPRESS'} progress={'70%'} width={'70%'} />
        <SkillsSection skill={'FIREBASE'} progress={'60%'} width={'60%'} />
        <SkillsSection skill={'SCSS/SASS'} progress={'80%'} width={'80%'} />
        <SkillsSection skill={'Web Design'} progress={'75%'} width={'75%'} />
        <SkillsSection skill={'UI/Ux Design'} progress={'50%'} width={'50%'} />
      </div>

      <Tittle title={'Services'} span={'Services'} />
      <div className='servives-container'>
        <ServicesSection
          image={design}
          title={'Web design'}
          text={'clean and modern design of the webpage'}
        />
        <ServicesSection
          image={Mobile}
          title={'MOBILE-FRIENDLY'}
          text={'A responsive design for user accessiblity '}
        />
        <ServicesSection
          image={webDevelopment}
          title={'WEB-DEVELOPMENT'}
          text={'optimizes performance and  converting users to customers'}
        />
      </div>
    </div>
  );
}

export default SkillsPage;
