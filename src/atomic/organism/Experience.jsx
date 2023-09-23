import React from 'react';
import Card from '../molecules/Card';
import { detailExperience } from '/src/constants/index.js';

class Experience extends React.Component {
  render() {
    return (
      <div className="container experience__container">
        {detailExperience.map((experience, index) => (
          <Card key={index} title={experience.title} skill={experience.items} />
        ))}
      </div>
    );
  }
}

export default Experience;
