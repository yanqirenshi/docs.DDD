import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterPublishedLanguage (props) {
    let code = 'ChapterPublishedLanguage';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterPublishedLanguage;
