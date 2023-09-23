import React from 'react';

import Button from '../atom/Button';
import ButtonLink from '../atom/ButtonLink';

class CTA extends React.Component {
  render() {
    const { resume } = this.props;

    return (
      <div className="cta">
        <Button href={resume}>Download Resume</Button>
        <ButtonLink primary href="/contact">
          Let's Talk
        </ButtonLink>
      </div>
    );
  }
}

export default CTA;
