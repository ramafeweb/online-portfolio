import React from 'react';
import { Link } from 'react-router-dom';

class ButtonLink extends React.Component {
  render() {
    const { href, primary } = this.props;
    const className = primary ? 'btn btn-primary' : 'btn';

    return (
      <Link to={href} className={className}>
        {this.props.children}
      </Link>
    );
  }
}

export default ButtonLink;
