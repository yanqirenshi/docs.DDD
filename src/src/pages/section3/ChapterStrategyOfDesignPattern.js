import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterStrategyOfDesignPattern (props) {
    let code = 'ChapterStrategyOfDesignPattern';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterStrategyOfDesignPattern;
