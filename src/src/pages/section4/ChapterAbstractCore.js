import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterAbstractCore (props) {
    let code = 'ChapterAbstractCore';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterAbstractCore;
