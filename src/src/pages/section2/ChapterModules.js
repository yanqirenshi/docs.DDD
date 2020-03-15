import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterModules (props) {
    let code = 'ChapterModules';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterModules;
