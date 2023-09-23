import React from 'react';
import CTA from './../molecules/CTA';
import Socials from './../molecules/Socials';

class Header extends React.Component {
  render() {
    const { resume, name, imgProfile } = this.props;

    return (
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>{name}</h1>
        <h5 className="text-light">React And React Native For Front End Developer</h5>
        <CTA resume={resume} />
        <Socials />

        <div className="me">
          <img src={imgProfile} alt="Dias Nur Ramadhna" />
        </div>

        <a href="https://hacktiv8.com/" className="scroll__down">
          Hacktiv8
        </a>
      </div>
    );
  }
}

export default Header;
