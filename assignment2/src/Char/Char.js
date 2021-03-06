import React from 'react';

const char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center',
    };
    return (
        <p onClick ={props.clicked} style={style}>{props.character}</p>
    );
};

export default char;