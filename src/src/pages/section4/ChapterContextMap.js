import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterContextMap (props) {
    let code = 'ChapterContextMap';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterContextMap;
