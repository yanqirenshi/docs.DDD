import React from 'react';

import ReactFullpage from '@fullpage/react-fullpage';

import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

function PageHome () {
    let sections = {
        section1: {
            title: { label: 'ドメインモデルを機能させる' },
            chapters: {
                capter03: {
                    title: { label: 'ドメインとモデルを結びつける' },
                    contents: [
                        { code: 'ChapterUbiquitousLanguage', title: { ja: 'ユビキタス言語', en: 'UBIQUITOUS LANGUAGE', },  },
                        { code: 'ChapterDomainDrivenDesign', title: { ja: 'ドメイン駆動設計', en: 'DOMAIN-DRIVEN DESIGN', },  },
                    ],
                },
            }
        },
        section2: {
            title: { label: 'モデル駆動設計の構成要素' },
            chapters: {
                capter04: {
                    title: { label: 'ドメインを隔離する' },
                    contents: [
                        { code: 'ChapterLayeredArchitecture', title: { ja: 'レイヤー化アーキテクチャ', en: 'LAYERED ARCHITECTURE', },  },
                    ],
                },
                capter05: {
                    title: { label: 'ソフトウェアで表現されたモデル' },
                    contents: [
                        { code: 'ChapterEntities',     title: { ja: 'エンティティ', en: 'ENTITIES', },  },
                        { code: 'ChapterValueObjects', title: { ja: '値オブジェクト', en: 'VALUE OBJECTS', },  },
                        { code: 'ChapterServices',     title: { ja: 'サービス', en: 'SERVICES', },  },
                        { code: 'ChapterModules',      title: { ja: 'モジュール', en: 'MODULES', },  },
                    ],
                },
                capter06: {
                    title: { label: 'ドメイン・オブジェクトのライフサイクル' },
                    contents: [
                        { code: 'ChapterAggregates',   title: { ja: '集約', en: 'AGGREGATES', },  },
                        { code: 'ChapterFactories',    title: { ja: 'ファクトリ', en: 'FACTORIES', },  },
                        { code: 'ChapterRepositories', title: { ja: 'リポジトリ', en: 'REPOSITORIES', },  },
                    ],
                },
            }
        },
        section3: {
            title: { label: 'より深い洞察へ向うリファクタリング' },
            chapters: {
                capter09: {
                    title: { label: '暗黙的な概念を明示的にする' },
                    contents: [
                        { code: 'ChapterSpecification', title: { ja: '仕様', en: 'SPECIFICATION', },  },
                    ],
                },
                capter10: {
                    title: { label: 'しなやかな設計' },
                    contents: [
                        { code: 'ChapterIntentionRevealingInterfaces', title: { ja: '意図の明白なインターフェース', en: 'INTENTION REVEALING INTERFACES', },  },
                        { code: 'ChapterSideEffectFreeFunctions',      title: { ja: '副作用のない関数', en: 'SIDE-EFFECT FREE FUNCTIONS', },  },
                        { code: 'ChapterAssertions',                   title: { ja: '表明', en: 'ASSERTIONS', },  },
                        { code: 'ChapterConceptualContours',           title: { ja: '概念の輪郭', en: 'CONCEPTUAL CONTOURS', },  },
                        { code: 'ChapterStandaloneClasses',            title: { ja: '独立したクラス', en: 'STANDALONE CLASSES', },  },
                        { code: 'ChapterClosureOfOperations',          title: { ja: '閉じた操作', en: 'CLOSURE OF OPERATIONS', },  },
                    ],
                },
                capter12: {
                    title: { label: 'デザインパターンをモデルに関係づける' },
                    contents: [
                        { code: 'ChapterStrategyOfDesignPattern',  title: { ja: 'ストラテジー', en: 'STRATEGY OF DESIGN PATTERN', },  },
                        { code: 'ChapterCompositeOfDesignPattern', title: { ja: 'コンポジット', en: 'COMPOSITE OF DESIGN PATTERN', },  },
                    ],
                },
            }
        },
        section4: {
            title: { label: '戦略的設計' },
            chapters: {
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
            }
        },
    };

    return (
        <ReactFullpage
        //fullpage options
          licenseKey = {'YOUR_KEY_HERE'}
          scrollingSpeed = {1000} /* Options here */

          render={({ state, fullpageApi }) => {
              return (
                  <ReactFullpage.Wrapper>

                    <Section1 source={sections.section1} />
                    <Section2 source={sections.section2} />
                    <Section3 source={sections.section3} />
                    <Section4 source={sections.section4} />

                  </ReactFullpage.Wrapper>
              );
          }}
        />
    );
}

export default PageHome;
