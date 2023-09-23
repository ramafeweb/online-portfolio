import React from 'react';
import CardList from '../molecules/CardList';
import { detailInterest } from '/src/constants/index.js';

class Interest extends React.Component {
  render() {
    return (
      <div className="container interests__container">
        {detailInterest.map((item, index) => (
          <CardList title={item.title} items={item.items} key={index} />
        ))}
      </div>
    );
  }
}

export default Interest;
