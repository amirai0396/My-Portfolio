import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/_HomPage.styles.scss';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomePage() {
  return (
    <div className='HomePage'>
      <header className='hero'>
        <h1 className='hero-text'>
          Hey,
          <br /> I am <span>AMI RAI.</span>
        </h1>
        <p className='homepage-sub-text'>
          I'm a Frontend Developer <br /> who creates clean and modern content
          <br />
          for the World-Wide-Web.
        </p>
        <div className='icons'>
          <Link to='https://github.com/amirai0396' className='icon-holder'>
            <FontAwesomeIcon icon={faGithub} className='icon gh' />
          </Link>
          <Link to='/' className='icon-holder'>
            <FontAwesomeIcon icon={faTwitter} className='icon tt' />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
