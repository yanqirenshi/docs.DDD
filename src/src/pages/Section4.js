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

function Section4 (props) {
    return (
        <div className="section">
          <ChapterSection4Overview source={props.source} />

          <ChapterBoundedContext source={props.source.chapters.capter14} />
          <ChapterContinuousIntegration source={props.source.chapters.capter14} />
          <ChapterContextMap source={props.source.chapters.capter14} />
          <ChapterSharedKernel source={props.source.chapters.capter14} />
          <ChapterCostomerSupplierDevelopmentTeams source={props.source.chapters.capter14} />
          <ChapterConformist source={props.source.chapters.capter14} />
          <ChapterAntiCorruptionLayer source={props.source.chapters.capter14} />
          <ChapterSeparateWays source={props.source.chapters.capter14} />
          <ChapterOpenHostService source={props.source.chapters.capter14} />
          <ChapterPublishedLanguage source={props.source.chapters.capter14} />


          <ChapterCoreDomain source={props.source.chapters.capter15} />
          <ChapterGenericSubDomains source={props.source.chapters.capter15} />
          <ChapterDomainVisionStatement source={props.source.chapters.capter15} />
          <ChapterHighlightedCore source={props.source.chapters.capter15} />
          <ChapterCohesiveMechanisms source={props.source.chapters.capter15} />
          <ChapterSegregatedCore source={props.source.chapters.capter15} />
          <ChapterAbstractCore source={props.source.chapters.capter15} />


          <ChapterEvolvingOrder source={props.source.chapters.capter16} />
          <ChapterSystemMetaphor source={props.source.chapters.capter16} />
          <ChapterResponsibleityLayers source={props.source.chapters.capter16} />
          <ChapterKnowledgeLevel source={props.source.chapters.capter16} />
          <ChapterPluggableComponentFramework source={props.source.chapters.capter16} />
        </div>
    );
}

export default Section4;
