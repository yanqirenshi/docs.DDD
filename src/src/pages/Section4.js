import React from 'react';

/* **************** */
/* 第4部 戦略的設計 */
/* **************** */

import ChapterSection4Overview from './section4/ChapterSection4Overview';

// 第14章 モデルの整合性を維持する。
import ChapterBoundedContext from './section4/ChapterBoundedContext';
import ChapterContinuousIntegration from './section4/ChapterContinuousIntegration';
import ChapterContextMap from './section4/ChapterContextMap';
import ChapterSharedKernel from './section4/ChapterSharedKernel';
import ChapterCostomerSupplierDevelopmentTeams from './section4/ChapterCostomerSupplierDevelopmentTeams';
import ChapterConformist from './section4/ChapterConformist';
import ChapterAntiCorruptionLayer from './section4/ChapterAntiCorruptionLayer';
import ChapterSeparateWays from './section4/ChapterSeparateWays';
import ChapterOpenHostService from './section4/ChapterOpenHostService';
import ChapterPublishedLanguage from './section4/ChapterPublishedLanguage';
// 第15章 蒸留
import ChapterCoreDomain from './section4/ChapterCoreDomain';
import ChapterGenericSubDomains from './section4/ChapterGenericSubDomains';
import ChapterDomainVisionStatement from './section4/ChapterDomainVisionStatement';
import ChapterHighlightedCore from './section4/ChapterHighlightedCore';
import ChapterCohesiveMechanisms from './section4/ChapterCohesiveMechanisms';
import ChapterSegregatedCore from './section4/ChapterSegregatedCore';
import ChapterAbstractCore from './section4/ChapterAbstractCore';
// 第16章 大規模な構造
import ChapterEvolvingOrder from './section4/ChapterEvolvingOrder';
import ChapterSystemMetaphor from './section4/ChapterSystemMetaphor';
import ChapterResponsibleityLayers from './section4/ChapterResponsibleityLayers';
import ChapterKnowledgeLevel from './section4/ChapterKnowledgeLevel';
import ChapterPluggableComponentFramework from './section4/ChapterPluggableComponentFramework';

function Section4 () {
    return (
        <div className="section">
          <ChapterSection4Overview />

          <ChapterBoundedContext />
          <ChapterContinuousIntegration />
          <ChapterContextMap />
          <ChapterSharedKernel />
          <ChapterCostomerSupplierDevelopmentTeams />
          <ChapterConformist />
          <ChapterAntiCorruptionLayer />
          <ChapterSeparateWays />
          <ChapterOpenHostService />
          <ChapterPublishedLanguage />


          <ChapterCoreDomain />
          <ChapterGenericSubDomains />
          <ChapterDomainVisionStatement />
          <ChapterHighlightedCore />
          <ChapterCohesiveMechanisms />
          <ChapterSegregatedCore />
          <ChapterAbstractCore />


          <ChapterEvolvingOrder />
          <ChapterSystemMetaphor />
          <ChapterResponsibleityLayers />
          <ChapterKnowledgeLevel />
          <ChapterPluggableComponentFramework />
        </div>
    );
}

export default Section4;
