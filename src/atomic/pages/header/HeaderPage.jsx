import React from 'react';
import Header from '../../organism/Header';
import './header.css';
import ME from '/src/assets/me-header.png';
import RESUME from '/src/assets/RESUME-BATCH5.pdf';

class HeaderPage extends React.Component {
  render() {
    return (
      <header>
        <Header name="Dias Nur Ramadhan" imgProfile={ME} resume={RESUME} />
      </header>
    );
  }
}

export default HeaderPage;
