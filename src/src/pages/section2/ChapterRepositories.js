import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterRepositories (props) {
    let code = 'ChapterRepositories';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterRepositories;
