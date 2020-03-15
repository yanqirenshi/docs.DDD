import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterEntities (props) {
    let code = 'ChapterEntities';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterEntities;
