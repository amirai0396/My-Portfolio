import React from 'react';
import ContactItem from '../Components/ContactItem.component';
import phone from '../images/phone.png';
import emailme from '../images/email.png';
import location from '../images/Location.png';
import Tittle from '../Components/Title.component';
import ContactForm from '../Components/contactUs.component';

function ContactPage() {
  return (
    <div>
      <div className='title'>
        <Tittle title={'Contact Me'} span={'Contact Me'} />
      </div>

      <div className='ContactPage'>
        <div className='map-sect'>
          <iframe
            title={`map`}
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5801357987!2d77.62461461482089!3d12.870372990922341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b36e5caab8f%3A0x150533fcb4f2b357!2sBegur%20Post%20Office!5e0!3m2!1sen!2sin!4v1616002079423!5m2!1sen!2sin'
            width='600'
            height='450'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
          ></iframe>
        </div>
        <div className='contact-sect'>
          <ContactItem
            icon={phone}
            title={`Contact No.`}
            text={`+91 6369509418`}
          />
          <ContactItem
            icon={emailme}
            title={`Email`}
            text={`amirai0396@gmail.com`}
          />
          <ContactItem
            icon={location}
            title={`Location`}
            text={`begur ,bangalore`}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
