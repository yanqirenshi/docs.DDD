import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterConceptualContours (props) {
    let code = 'ChapterConceptualContours';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterConceptualContours;
