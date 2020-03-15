import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterGenericSubDomains (props) {
    let code = 'ChapterGenericSubDomains';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterGenericSubDomains;
