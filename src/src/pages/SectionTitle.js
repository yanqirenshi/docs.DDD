import React from 'react';

function SectionTitle (props) {
    let style = {
        root: {
            fontSize: '66px',
            fontWeight: 'bold',
            fontFamily: 'Sawarabi Mincho',
            color: '#333333',
        },
    };

    return (
        <div style={style.root}>
          <p>{props.label}</p>
        </div>
    );
}

export default SectionTitle;
