import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterDomainDrivenDesign (props) {
    let code = 'ChapterDomainDrivenDesign';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterDomainDrivenDesign;
