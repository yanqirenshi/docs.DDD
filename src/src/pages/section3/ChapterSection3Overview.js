import React from 'react';

import SectionTitle from '../SectionTitle';
import CapterIndex from '../CapterIndex';

function ChapterSection3Overview (props) {
    let title = props.source.title;
    let articles = props.source.chapters;

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
          <SectionTitle label={title.label}/>

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
