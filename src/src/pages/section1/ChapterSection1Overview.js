import React from 'react';

import SectionTitle from '../SectionTitle';
import CapterIndex from '../CapterIndex';

function ChapterSection1Overview (props) {
    let title = props.source.title;
    let articles = props.source.capters;

    let style = {
        contents_root: {
            display: 'flex',
            justifyContent: 'center',
        },
    };

    return (
        <div className="slide">
          <SectionTitle label={title.label}/>

          <div style={style.contents_root}>
            <CapterIndex source={articles.capter03}/>
          </div>
        </div>
    );
}

export default ChapterSection1Overview;
