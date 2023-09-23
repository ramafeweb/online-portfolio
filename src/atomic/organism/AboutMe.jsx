import React from 'react';
import ME from '../../assets/ME.jpeg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const AboutMe = () => {
  return (
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>3+ Years Working</small>
          </article>

          <article className="about__card">
            <FiUsers className="about__icon" />
            <h5>Clients</h5>
            <small>100+ Worldwide</small>
          </article>

          <article className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5>Projects</h5>
            <small>50+ Complated</small>
          </article>
        </div>

        <p>
          I am a college student who has experience in Frontend Web Developer and React, has
          knowledge of user interface, testing and debugging process. I am highly skilled in web
          development with 2 years of experience in creating visually appealing and user friendly
          websites. Mastery of HTML, CSS, JavaScript and various frontend frameworks. Strong
          understanding of UI/UX principles and responsive design. Ability to work with the team to
          provide solutions to problems. Commitment to keeping abreast of the latest industry trends
          and technologies.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
