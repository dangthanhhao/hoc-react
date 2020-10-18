import React, { useState } from 'react';
import './App.css';
import Header from './components/header'
import NoteForm from './components/noteForm';
import SideBar from './components/sidebar/sidebar'
function App() {
  const [notes, setNotes]=useState([{title: "My note",detail:"ABCD efedas"}])


  return (
    <div className="App">
      <Header></Header>
      
      <div className="container">
        <div className="row">
          <SideBar></SideBar>
          <NoteForm notes={notes}></NoteForm>
        </div>
      </div>

    </div>
  );
}

export default App