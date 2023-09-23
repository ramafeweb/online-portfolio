import React from 'react';

class Button extends React.Component {
  render() {
    const { href, primary } = this.props;
    const className = primary ? 'btn btn-primary' : 'btn';

    return (
      <a href={href} className={className}>
        {this.props.children}
      </a>
    );
  }
}

export default Button;
