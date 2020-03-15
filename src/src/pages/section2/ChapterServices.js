import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterServices (props) {
    let code = 'ChapterServices';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterServices;
