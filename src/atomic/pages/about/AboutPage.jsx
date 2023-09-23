import React from 'react';
import './about.css';
import SectionLayout from '../../templates/SectionLayout';
import About from '../../organism/About';

class AboutPage extends React.Component {
  render() {
    return (
      <SectionLayout section="about" desc="Get To Know">
        <About />
      </SectionLayout>
    );
  }
}

export default AboutPage;
