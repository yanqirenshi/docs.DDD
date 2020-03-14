import React from 'react';

/* ****************************** */
/* 第2部 モデル駆動設計の構成要素 */
/* ****************************** */

// 第04章 ドメインを隔離する
import SectionLayeredArchitecture from './SectionLayeredArchitecture';
// 第05章 ソフトウェアで表現されたモデル
import SectionEntities from './SectionEntities';
import SectionValueObjects from './SectionValueObjects';
import SectionServices from './SectionServices';
import SectionModules from './SectionModules';
// 第06章 ドメイン・オブジェクトのライフサイクル
import SectionAggregates from './SectionAggregates';
import SectionFactories from './SectionFactories';
import SectionRepositories from './SectionRepositories';

function Section2 () {
    return (
        <>
          <SectionLayeredArchitecture />
          <SectionEntities />
          <SectionValueObjects />
          <SectionServices />
          <SectionModules />
          <SectionAggregates />
          <SectionFactories />
          <SectionRepositories />
        </>
    );
}

export default Section2;
