import React from 'react';

function CapterIndex (props) {
    let style = {
        contents_root: {
            display: 'flex',
            justifyContent: 'center',
        },
        title: {
            ja: {
                fontSize: '22px',
                lineHeight: '22px',
                fontWeight: 'bold',
            },
            en: {
                fontSize: '11px',
                lineHeight: '11px',
            },
        },
    };

    let title = props.source.title;
    let contents = props.source.contents;

    return (
        <div>
          <h1 className="title is-6">
            {title.label}
          </h1>

          <div>
            {contents.map((d)=>{
                return <div key={d.code}>
                         <p>
                           <span style={style.title.ja}>{d.title.ja}</span>
                           <br/>
                           <span style={style.title.en}>({d.title.en})</span>
                         </p>
                       </div>;
            })}
          </div>
        </div>
    );
}

export default CapterIndex;
