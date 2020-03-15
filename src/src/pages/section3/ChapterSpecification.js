import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterSpecification (props) {
    let code = 'ChapterSpecification';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterSpecification;
