import React from 'react'
import classes from './CharComponent.module.css';
function CharComponent(props) {
    return (
        <div className={classes['char-box']} onClick={props.click}>
            <p className={classes.pp}>Ny name is</p>
            {props.char}
        </div>
    )
}
export default CharComponent;