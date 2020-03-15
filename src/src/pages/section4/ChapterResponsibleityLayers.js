import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterResponsibleityLayers (props) {
    let code = 'ChapterResponsibleityLayers';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterResponsibleityLayers;
