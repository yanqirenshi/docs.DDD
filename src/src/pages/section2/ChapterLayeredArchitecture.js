import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterLayeredArchitecture (props) {
    let code = 'ChapterLayeredArchitecture';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterLayeredArchitecture;
