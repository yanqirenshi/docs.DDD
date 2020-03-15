import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterBoundedContext (props) {
    let code = 'ChapterBoundedContext';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterBoundedContext;
