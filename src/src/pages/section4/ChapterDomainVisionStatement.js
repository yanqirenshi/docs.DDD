import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterDomainVisionStatement (props) {
    let code = 'ChapterDomainVisionStatement';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterDomainVisionStatement;
