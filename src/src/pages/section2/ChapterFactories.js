import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterFactories (props) {
    let code = 'ChapterFactories';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterFactories;
