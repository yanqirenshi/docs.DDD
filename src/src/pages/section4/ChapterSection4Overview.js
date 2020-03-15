import React from 'react';

import SectionTitle from '../SectionTitle';
import CapterIndex from '../CapterIndex';

function ChapterSection4Overview (props) {
    let title = props.source.title;
    let articles = props.source.capters;

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
