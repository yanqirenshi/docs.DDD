import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterSideEffectFreeFunctions (props) {
    let code = 'ChapterSideEffectFreeFunctions';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterSideEffectFreeFunctions;
