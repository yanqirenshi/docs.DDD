import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterEvolvingOrder (props) {
    let code = 'ChapterEvolvingOrder';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterEvolvingOrder;
