import React from 'react'
import './CharComponent.css'
function CharComponent(props) {
    return (
        <div className="char-box" onClick={props.click}>
            {props.char}
        </div>
    )
}
export default CharComponent;