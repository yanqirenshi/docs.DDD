import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterConformist (props) {
    let code = 'ChapterConformist';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterConformist;
