import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterSeparateWays (props) {
    let code = 'ChapterSeparateWays';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterSeparateWays;
