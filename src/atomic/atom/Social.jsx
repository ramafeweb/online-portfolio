import React from 'react';

class Social extends React.Component {
  render() {
    const { href } = this.props;

    return (
      <>
        <a href={href} target={'_blank'} className="header__socials-icon">
          {this.props.children}
        </a>
      </>
    );
  }
}

export default Social;
