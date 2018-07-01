import React from 'react';

const validation = (props) => {
    let validationMessage = '';
    if (props.inputLength >= 5) {
        validationMessage = 'Text too long'
    } else {
        validationMessage = 'Text too short'
    }
    return(
        <p>{validationMessage}</p>
    );
};

export default validation;