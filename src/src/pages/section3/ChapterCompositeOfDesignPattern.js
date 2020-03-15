import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterCompositeOfDesignPattern (props) {
    let code = 'ChapterCompositeOfDesignPattern';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterCompositeOfDesignPattern;
