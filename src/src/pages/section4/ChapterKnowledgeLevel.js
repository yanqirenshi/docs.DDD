import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterKnowledgeLevel (props) {
    let code = 'ChapterKnowledgeLevel';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterKnowledgeLevel;
