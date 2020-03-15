import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterSystemMetaphor (props) {
    let code = 'ChapterSystemMetaphor';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterSystemMetaphor;
