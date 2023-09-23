import React from 'react';
import CardContent from '../atom/CardContent';

class Card extends React.Component {
  render() {
    const { title, skill } = this.props;
    const skillDetail = skill;

    return (
      <div className="experience__frontend">
        <h3>{title}</h3>
        <div className="experience__content">
          {skillDetail.map((skill) => (
            <CardContent key={skill.id} skill={skill.skill} level={skill.level} />
          ))}
        </div>
      </div>
    );
  }
}

export default Card;
