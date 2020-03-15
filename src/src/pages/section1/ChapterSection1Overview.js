import React from 'react';

import SectionTitle from '../SectionTitle';
import CapterIndex from '../CapterIndex';

function ChapterSection1Overview () {
    let articles = {
        capter03: {
            title: { label: 'ドメインとモデルを結びつける' },
            contents: [
                { code: 'ChapterUbiquitousLanguage', title: { ja: 'ユビキタス言語', en: 'UBIQUITOUS LANGUAGE', },  },
                { code: 'ChapterDomainDrivenDesign', title: { ja: 'ドメイン駆動設計', en: 'DOMAIN-DRIVEN DESIGN', },  },
            ],
        },
    };

    let style = {
        contents_root: {
            display: 'flex',
            justifyContent: 'center',
        },
    };

    return (
        <div className="slide">
          <SectionTitle label="ドメインモデルを機能させる"/>

          <div style={style.contents_root}>
            <CapterIndex source={articles.capter03}/>
          </div>
        </div>
    );
}

export default ChapterSection1Overview;
