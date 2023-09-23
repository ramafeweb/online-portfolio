import React from 'react';
import { Link } from 'react-router-dom';

import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServerLine, RiAwardLine } from 'react-icons/ri';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      activeNav: '/',
    };
  }

  handleNavClick = (navPath) => {
    this.setState({ activeNav: navPath });
  };

  render() {
    const { activeNav } = this.state;

    return (
      <nav>
        <Link
          to="/"
          title="Home"
          onClick={() => this.handleNavClick('/')}
          className={activeNav === '/' ? 'active' : ''}
        >
          <AiOutlineHome />
        </Link>
        <Link
          to="/about"
          title="About"
          onClick={() => this.handleNavClick('/about')}
          className={activeNav === '/about' ? 'active' : ''}
        >
          <AiOutlineUser />
        </Link>
        <Link
          to="/experience"
          title="Experience"
          onClick={() => this.handleNavClick('/experience')}
          className={activeNav === '/experience' ? 'active' : ''}
        >
          <BiBook />
        </Link>
        <Link
          to="/interest"
          title="Interest"
          onClick={() => this.handleNavClick('/interest')}
          className={activeNav === '/interest' ? 'active' : ''}
        >
          <RiServerLine />
        </Link>
        <Link
          to="/awards"
          title="Awards"
          onClick={() => this.handleNavClick('/awards')}
          className={activeNav === '/awards' ? 'active' : ''}
        >
          <RiAwardLine />
        </Link>
        <Link
          to="/contact"
          title="Contact"
          onClick={() => this.handleNavClick('/contact')}
          className={activeNav === '/contact' ? 'active' : ''}
        >
          <BiMessageSquareDetail />
        </Link>
      </nav>
    );
  }
}

export default Nav;
