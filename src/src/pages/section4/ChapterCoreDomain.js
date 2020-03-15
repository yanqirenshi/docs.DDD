import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterCoreDomain (props) {
    let code = 'ChapterCoreDomain';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterCoreDomain;
