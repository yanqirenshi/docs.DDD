import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterValueObjects (props) {
    let code = 'ChapterValueObjects';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterValueObjects;
