import React from 'react';

import './interest.css';
import SectionLayout from '../../templates/SectionLayout';
import Interest from '../../organism/Interest';

class InterestPage extends React.Component {
  render() {
    return (
      <SectionLayout section="interest" desc="Be Better Every Day">
        <Interest />
      </SectionLayout>
    );
  }
}

export default InterestPage;
