import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Nav from './atomic/organism/nav/Nav';
import HeaderPage from './atomic/pages/Header/HeaderPage';
import AboutPage from './atomic/pages/about/AboutPage';
import AboutMe from './atomic/organism/AboutMe';
import AboutCompany from './atomic/organism/AboutCompany';
import ExperiencePage from './atomic/pages/experiece/ExperiencePage';
import ContactPage from './atomic/pages/contact/ContactPage';
import InterestPage from './atomic/pages/interest/InterestPage';
import AwardsPage from './atomic/pages/awards/AwardsPage';

class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<HeaderPage />} />
          <Route path="/about" element={<AboutPage />}>
            <Route path="about-me" element={<AboutMe />} />
            <Route path="about-company" element={<AboutCompany />} />
          </Route>
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/interest" element={<InterestPage />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Nav />
      </>
    );
  }
}

export default App;
