import React from 'react';

class SectionLayout extends React.Component {
  render() {
    const { section, desc, children } = this.props;
    return (
      <section id={section}>
        <h5>{desc}</h5>
        <h2>{section}</h2>
        {children}
      </section>
    );
  }
}

export default SectionLayout;
