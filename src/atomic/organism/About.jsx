import React from 'react';
import { Link, Outlet } from 'react-router-dom';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      nonActiveAbout: '/',
    };
  }

  handleAboutClick = (aboutPath) => {
    this.setState({ nonActiveAbout: aboutPath });
  };

  render() {
    const { nonActiveAbout } = this.state;

    return (
      <>
        <div className="about__information">
          <Link
            to="about-me"
            className={
              nonActiveAbout === '/about-me'
                ? 'btn btn-primary'
                : 'nonactive__about btn btn-primary'
            }
            onClick={() => this.handleAboutClick('/about-me')}
          >
            About Me
          </Link>
          <Link
            to="about-company"
            className={
              nonActiveAbout === '/about-company'
                ? 'btn btn-primary'
                : 'nonactive__about btn btn-primary'
            }
            onClick={() => this.handleAboutClick('/about-company')}
          >
            About Company
          </Link>
        </div>
        <Outlet />
      </>
    );
  }
}

export default About;
