import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
function App() {
  const [state, stateChange]= useState({typeText: ""})

  const changeHandler= (event)=>{
      const newState= {...state}
      newState.typeText=event.target.value;
      stateChange(newState);
  }
  const clickHandler= (index)=>{
    const newState= {...state}
    newState.typeText= newState.typeText.slice(0,index)+newState.typeText.slice(index+1)
      stateChange(newState);
  }

  return (
    <div className="container">
        <input type="text" className="form-control" onChange={changeHandler} value={state.typeText}></input>
        <h3>{state.typeText.length}</h3>
        <ValidationComponent inputLength={state.typeText.length}></ValidationComponent>
        {
        state.typeText.split('').map( (ele,index)=> <CharComponent char={ele} key={index} click={()=>clickHandler(index)} ></CharComponent>)
        }

    </div>
  );
}

export default App;
