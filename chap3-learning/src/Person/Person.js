import React from 'react'

const person = (props) => {
return (
<div>I'm a {props.name} <br />
<input onChange={props.typeChange} value={props.name}></input>
</div>

);
}
export default person 
