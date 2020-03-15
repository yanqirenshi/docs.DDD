import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterPluggableComponentFramework (props) {
    let code = 'ChapterPluggableComponentFramework';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterPluggableComponentFramework;
