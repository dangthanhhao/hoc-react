import React from 'react';

function ValidationComponent(props) {
    const MIN_LENGTH=5;
    return(
        <p>
            {props.inputLength<MIN_LENGTH?"Text to short": "Text long enough"}
        </p>
    );
    
}
export default ValidationComponent