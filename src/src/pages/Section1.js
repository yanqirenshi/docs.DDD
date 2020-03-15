import React from 'react';

/* ******************************** */
/* 第1部 ドメインモデルを機能させる */
/* ******************************** */

import ChapterSection1Overview from './section1/ChapterSection1Overview';

// 第03章 ドメインとモデルを結びつける
import ChapterUbiquitousLanguage from './section1/ChapterUbiquitousLanguage';
import ChapterDomainDrivenDesign from './section1/ChapterDomainDrivenDesign';

function Section1 () {
    return (
        <div className="section">
          <ChapterSection1Overview />

          <ChapterUbiquitousLanguage />
          <ChapterDomainDrivenDesign />
        </div>
    );
}

export default Section1;
