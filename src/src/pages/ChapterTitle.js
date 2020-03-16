import React from 'react';

function ChapterTitle (props) {
    let code = props.code;
    let data = props.chapters.find((d)=>{ return d.code===code; });

    let style = {
        ja: {
            fontSize: '66px',
            fontWeight: 'bold',
            fontFamily: 'Sawarabi Mincho',
            color: '#333333',
            marginBottom: '0px',
        },
        en: {
            fontSize: '22px',
            fontWeight: 'bold',
            fontFamily: 'Sawarabi Mincho',
            color: '#333333',
        },
    };

    return (
        <div>
          <p style={style.ja}>{data.title.ja}</p>
          <p style={style.en}>{data.title.en}</p>
        </div>
    );
}

export default ChapterTitle;
