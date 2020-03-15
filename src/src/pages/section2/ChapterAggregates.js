import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterAggregates (props) {
    let code = 'ChapterAggregates';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterAggregates;
