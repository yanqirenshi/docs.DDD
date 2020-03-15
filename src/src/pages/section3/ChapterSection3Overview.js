import React from 'react';

import SectionTitle from '../SectionTitle';
import CapterIndex from '../CapterIndex';

function ChapterSection3Overview () {
    let articles = {
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
          <SectionTitle label="より深い洞察へ向うリファクタリング"/>

          <div style={style.contents_root}>
            <CapterIndex source={articles.capter09}/>
            <div style={style.spacer}></div>
            <CapterIndex source={articles.capter10}/>
            <div style={style.spacer}></div>
            <CapterIndex source={articles.capter12}/>
          </div>
        </div>
    );
}

export default ChapterSection3Overview;
