import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return(
        <div className = 'UserOutput' >
        <h4> {props.userName} </h4>
        <p> {props.text}  </p>
        </div>
    )
};

export default UserOutput;