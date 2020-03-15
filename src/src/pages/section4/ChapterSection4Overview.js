import React from 'react';

import SectionTitle from '../SectionTitle';
import CapterIndex from '../CapterIndex';

function ChapterSection4Overview () {
    let articles = {
        capter14: {
            title: { label: 'モデルの整合性を維持する' },
            contents: [
                { code: 'ChapterBoundedContext',                   title: { ja: '境界づけられたコンテキスト', en: 'BOUNDED CONTEXT', }, },
                { code: 'ChapterContinuousIntegration',            title: { ja: '継続的な統合', en: 'CONTINUOUS INTEGRATION', },  },
                { code: 'ChapterContextMap',                       title: { ja: 'コンテキスト・マップ', en: 'CONTEXT MAP', },  },
                { code: 'ChapterSharedKernel',                     title: { ja: '共有カーネル', en: 'SHARED KERNEL', },  },
                { code: 'ChapterCostomerSupplierDevelopmentTeams', title: { ja: '顧客/供給者の開発チーム', en: 'COSTOMER / SUPPLIER DEVELOPMENT TEAMS', },  },
                { code: 'ChapterConformist',                       title: { ja: '順応者', en: 'CONFORMIST', },  },
                { code: 'ChapterAntiCorruptionLayer',              title: { ja: '腐敗防止層', en: 'ANTI-CORRUPTION LAYER', },  },
                { code: 'ChapterSeparateWays',                     title: { ja: '別々の道', en: 'SEPARATE WAYS', },  },
                { code: 'ChapterOpenHostService',                  title: { ja: '公開ホストサービス', en: 'OPEN HOST SERVICE', },  },
                { code: 'ChapterPublishedLanguage',                title: { ja: '公表された言語', en: 'PUBLISHED LANGUAGE', },  },
            ],
        },
        capter15: {
            title: { label: '蒸留' },
            contents: [
                { code: 'ChapterCoreDomain',            title: { ja: 'コア・ドメイン', en: 'CORE DOMAIN', },  },
                { code: 'ChapterGenericSubDomains',     title: { ja: '汎用サブドメイン', en: 'GENERIC SUBDOMAINS', },  },
                { code: 'ChapterDomainVisionStatement', title: { ja: 'ドメイン・ビジョン声明文', en: 'DOMAIN VISION STATEMENT', },  },
                { code: 'ChapterHighlightedCore',       title: { ja: '強調されたコア', en: 'HIGHLIGHTED CORE', },  },
                { code: 'ChapterCohesiveMechanisms',    title: { ja: '凝縮されたメカニズム', en: 'COHESIVE MECHANISMS', },  },
                { code: 'ChapterSegregatedCore',        title: { ja: '隔離されたコア', en: 'SEGREGATED CORE', },  },
                { code: 'ChapterAbstractCore',          title: { ja: '抽象化されたコア', en: 'ABSTRACT CORE', },  },
            ],
        },
        capter16: {
            title: { label: '大規模な構造' },
            contents: [
                { code: 'ChapterEvolvingOrder',               title: { ja: '進化する秩序', en: 'EVOLVING ORDER', },  },
                { code: 'ChapterSystemMetaphor',              title: { ja: 'システムのメタファ', en: 'SYSTEM METAPHOR', },  },
                { code: 'ChapterResponsibleityLayers',        title: { ja: '職責のレイヤ', en: 'RESPONSIBLEITY LAYERS', },  },
                { code: 'ChapterKnowledgeLevel',              title: { ja: '知識レベル', en: 'KNOWLEDGE LEVEL', },  },
                { code: 'ChapterPluggableComponentFramework', title: { ja: '着脱可能コンポーネントのフレームワーク', en: 'PLUGGABLE COMPONEN TFRAMEWORK', },  },
            ],
        },
    };

    let style = {
        contents_root: {
            display: 'flex',
            justifyContent: 'center',
        },
        spacer: {
            width: '66px',
        },
    };

    return (
        <div className="slide">
          <SectionTitle label="戦略的設計"/>

          <div style={style.contents_root}>
            <CapterIndex source={articles.capter14}/>
            <div style={style.spacer}></div>
            <CapterIndex source={articles.capter15}/>
            <div style={style.spacer}></div>
            <CapterIndex source={articles.capter16}/>
          </div>
        </div>
    );
}

export default ChapterSection4Overview;
