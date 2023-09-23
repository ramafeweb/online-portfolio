import React from 'react';
import Company from '../../assets/hacktiv8.png';

export default function AboutCompany() {
  return (
    <div className="container about__container">
      <div className="about__me">
        <div className="about__company-image">
          <img src={Company} alt="About Image" />
        </div>
      </div>

      <div className="about__content">
        <h3>
          Hacktiv8 adalah penyelenggara program pelatihan intensif atau disebut bootcamp untuk
          mentransformasi pemula menjadi talenta digital siap kerja.
        </h3>
        <p>
          Hactiv8 berupaya untuk mengatasi kesenjangan talenta digital melalui program pelatihan
          kami. Hingga 2022, kami telah memberikan pelatihan kepada lebih dari 7.200 siswa. Kami
          bangga telah mengembangkan talenta digital dengan berbagai keterampilan yang dibutuhkan
          untuk mencapai kesuksesan di industri digital. Ada lebih dari 550 orang di tahun 2022 yang
          kami bantu dalam meraih karir impian mereka.
        </p>
      </div>
    </div>
  );
}
