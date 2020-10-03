import React from 'react'
 const userInput=(props)=>{
    console.log('render')
    return <input type="text" onChange={props.onchange} defaultValue={props.default}>
    </input>
};
export default userInput