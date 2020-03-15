import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterAntiCorruptionLayer (props) {
    let code = 'ChapterAntiCorruptionLayer';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterAntiCorruptionLayer;
