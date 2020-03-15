import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterStandaloneClasses (props) {
    let code = 'ChapterStandaloneClasses';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterStandaloneClasses;
