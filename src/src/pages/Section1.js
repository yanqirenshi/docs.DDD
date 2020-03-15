import React from 'react';

/* ******************************** */
/* 第1部 ドメインモデルを機能させる */
/* ******************************** */

import ChapterSection1Overview from './section1/ChapterSection1Overview';

// 第03章 ドメインとモデルを結びつける
import ChapterUbiquitousLanguage from './section1/ChapterUbiquitousLanguage';
import ChapterDomainDrivenDesign from './section1/ChapterDomainDrivenDesign';

function Section1 (props) {
    return (
        <div className="section">
          <ChapterSection1Overview source={props.source} />

          <ChapterUbiquitousLanguage source={props.source.chapters.capter03} />
          <ChapterDomainDrivenDesign source={props.source.chapters.capter03} />
        </div>
    );
}

export default Section1;
