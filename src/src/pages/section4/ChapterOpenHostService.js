import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterOpenHostService (props) {
    let code = 'ChapterOpenHostService';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterOpenHostService;
