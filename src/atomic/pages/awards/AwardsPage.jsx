import React from 'react';

import './portfolio.css';
import SectionLayout from '../../templates/SectionLayout';
import Portfolio from '../../organism/Portfolio';

class AwardsPage extends React.Component {
  render() {
    return (
      <SectionLayout section="awards" desc="My Recent Awards">
        <Portfolio />
      </SectionLayout>
    );
  }
}

export default AwardsPage;
