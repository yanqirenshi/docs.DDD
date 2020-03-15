import React from 'react';

/* ****************************** */
/* 第2部 モデル駆動設計の構成要素 */
/* ****************************** */

import ChapterSection2Overview from './section2/ChapterSection2Overview';

// 第04章 ドメインを隔離する
import ChapterLayeredArchitecture from './section2/ChapterLayeredArchitecture';
// 第05章 ソフトウェアで表現されたモデル
import ChapterEntities from './section2/ChapterEntities';
import ChapterValueObjects from './section2/ChapterValueObjects';
import ChapterServices from './section2/ChapterServices';
import ChapterModules from './section2/ChapterModules';
// 第06章 ドメイン・オブジェクトのライフサイクル
import ChapterAggregates from './section2/ChapterAggregates';
import ChapterFactories from './section2/ChapterFactories';
import ChapterRepositories from './section2/ChapterRepositories';

function Section2 (props) {
    return (
        <div className="section">
          <ChapterSection2Overview source={props.source} />

          <ChapterLayeredArchitecture source={props.source.chapters.capter04} />

          <ChapterEntities source={props.source.chapters.capter05} />
          <ChapterValueObjects source={props.source.chapters.capter05} />
          <ChapterServices source={props.source.chapters.capter05} />
          <ChapterModules source={props.source.chapters.capter05} />

          <ChapterAggregates source={props.source.chapters.capter06} />
          <ChapterFactories source={props.source.chapters.capter06} />
          <ChapterRepositories source={props.source.chapters.capter06} />
        </div>
    );
}

export default Section2;
