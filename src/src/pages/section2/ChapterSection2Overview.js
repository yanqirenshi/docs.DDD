import React from 'react';

import SectionTitle from '../SectionTitle';
import CapterIndex from '../CapterIndex';

function ChapterSection2Overview () {
    let articles = {
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
          <SectionTitle label="モデル駆動設計の構成要素"/>

          <div style={style.contents_root}>
            <CapterIndex source={articles.capter04}/>
            <div style={style.spacer}></div>
            <CapterIndex source={articles.capter05}/>
            <div style={style.spacer}></div>
            <CapterIndex source={articles.capter06}/>
          </div>
        </div>
    );
}

export default ChapterSection2Overview;
