import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterClosureOfOperations (props) {
    let code = 'ChapterClosureOfOperations';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterClosureOfOperations;
