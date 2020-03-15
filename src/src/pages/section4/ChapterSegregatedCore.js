import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterSegregatedCore (props) {
    let code = 'ChapterSegregatedCore';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterSegregatedCore;
