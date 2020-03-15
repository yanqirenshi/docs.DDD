import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterUbiquitousLanguage (props) {
    let code = 'ChapterUbiquitousLanguage';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterUbiquitousLanguage;
