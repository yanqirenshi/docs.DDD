import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterCohesiveMechanisms (props) {
    let code = 'ChapterCohesiveMechanisms';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterCohesiveMechanisms;
