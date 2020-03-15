import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterIntentionRevealingInterfaces (props) {
    let code = 'ChapterIntentionRevealingInterfaces';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterIntentionRevealingInterfaces;
