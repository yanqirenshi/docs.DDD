import React from 'react';

/* ******************************** */
/* 第1部 ドメインモデルを機能させる */
/* ******************************** */

// 第03章 ドメインとモデルを結びつける
import SectionUbiquitousLanguage from './SectionUbiquitousLanguage';
import SectionDomainDrivenDesign from './SectionDomainDrivenDesign';

function Section1 () {
    return (
        <>
          <SectionUbiquitousLanguage />
          <SectionDomainDrivenDesign />
        </>
    );
}

export default Section1;
