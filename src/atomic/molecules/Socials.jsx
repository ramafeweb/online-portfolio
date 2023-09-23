import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import Social from '../atom/Social';

class Socials extends React.Component {
  render() {
    return (
      <div className="header__socials">
        <Social href="https://www.linkedin.com/in/dias-nur-ramadhan/">
          <BsLinkedin />
        </Social>
        <Social href="https://github.com/ramafeweb">
          <FaGithub />
        </Social>
        <Social href="https://www.instagram.com/dias_nur_ramadhan/">
          <FiInstagram />
        </Social>
      </div>
    );
  }
}

export default Socials;
