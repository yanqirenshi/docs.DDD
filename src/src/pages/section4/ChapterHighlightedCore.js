import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterHighlightedCore (props) {
    let code = 'ChapterHighlightedCore';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterHighlightedCore;
