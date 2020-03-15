import React from 'react';

function ChapterTitle (props) {
    let code = props.code;
    let data = props.chapters.find((d)=>{ return d.code===code; });

    return (
        <div>
          <p>{data.title.ja}</p>
          <p>{data.title.en}</p>
        </div>
    );
}

export default ChapterTitle;
