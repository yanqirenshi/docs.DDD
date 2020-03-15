import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterSharedKernel (props) {
    let code = 'ChapterSharedKernel';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterSharedKernel;
