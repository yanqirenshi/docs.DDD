import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterContinuousIntegration (props) {
    let code = 'ChapterContinuousIntegration';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterContinuousIntegration;
