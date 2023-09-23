import React from 'react';

import './experience.css';
import SectionLayout from '../../templates/SectionLayout';
import Experience from '../../organism/Experience';

class ExperiencePage extends React.Component {
  render() {
    return (
      <SectionLayout section="experience" desc="What Skills I Have">
        <Experience />
      </SectionLayout>
    );
  }
}

export default ExperiencePage;
