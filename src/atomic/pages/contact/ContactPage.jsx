import React from 'react';
import './contact.css';
import Contact from '../../organism/Contact';
import SectionLayout from '../../templates/SectionLayout';

class ContactPage extends React.Component {
  render() {
    return (
      <SectionLayout section="contact" desc="Get In Touch">
        <Contact />
      </SectionLayout>
    );
  }
}

export default ContactPage;
