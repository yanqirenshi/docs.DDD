import React from 'react';

import ChapterTitle from '../ChapterTitle';

function ChapterCostomerSupplierDevelopmentTeams (props) {
    let code = 'ChapterCostomerSupplierDevelopmentTeams';
    let chapters = props.source.contents;

    return (
        <div className="slide">
          <ChapterTitle code={code} chapters={chapters}/>
        </div>
    );
}

export default ChapterCostomerSupplierDevelopmentTeams;
