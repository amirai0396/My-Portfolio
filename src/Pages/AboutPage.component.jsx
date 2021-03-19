import React from 'react';
import ImageSection from '../Components/Image.component';

import Title from '../Components/Title.component';
function AboutPage() {
  return (
    <div className='AboutPage'>
      <Title title={'About Me'} span={'About Me'} />
      <ImageSection />
    </div>
  );
}

export default AboutPage;
