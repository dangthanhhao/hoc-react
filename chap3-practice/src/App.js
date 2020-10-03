import React, { useState } from 'react';
import './App.css';
import UserInput from  './UserInput/UserInput' ;

import { UserOutput } from './UserOutput/UserOutput';

function App() {
  const [usernameState,usernameStageChange]= useState({usernames:["hao","nguyen"]})
  
  const changeUsernameHandler=(event)=>{
    usernameStageChange({usernames:[event.target.value,event.target.value]})
  }
  return (
    <div className="App">
      <UserInput onchange={changeUsernameHandler} default={usernameState.usernames[0]}> </UserInput>
    
      <UserOutput username={usernameState.usernames[0]}  ></UserOutput>
      <UserOutput username={usernameState.usernames[1]}></UserOutput>
    </div>
  );
}

export default App;
