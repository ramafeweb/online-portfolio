import React from 'react';

import IMG1 from '../../assets/award1.png';
import IMG2 from '../../assets/award2.png';
import IMG3 from '../../assets/award3.png';

class Portfolio extends React.Component {
  render() {
    return (
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>MSIB Batch 3 Front-End Web dan React</h3>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Belajar Fundamental Aplikasi Web dengan React</h3>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Menjadi Front-End Web Developer Expert</h3>
        </article>
      </div>
    );
  }
}

export default Portfolio;
