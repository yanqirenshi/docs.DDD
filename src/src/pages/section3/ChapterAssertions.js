import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterAssertions (props) {
    let code = 'ChapterAssertions';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterAssertions;
