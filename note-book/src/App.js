import React, { useState } from 'react';
import './App.css';
import Header from './components/header'
import NoteForm from './components/noteForm';
import SideBar from './components/sidebar/sidebar'
const LST_LIST_NOTE="listNote"
function App() {
  const initNote= JSON.parse(localStorage.getItem(LST_LIST_NOTE))
  const [notes, setNotes]=useState(
    initNote?initNote : [{id:0, title: "My note1 ",detail:"ABCD efedas"},{id:1,title: "My note 2",detail:"ABCD efedas"},{id:2,title: "My note 3",detail:"ABCD efedas"} ])

  const [seletednotes,setSeletedNote]= useState(null)
  const changeSeletedNote=(note)=>{
    setSeletedNote(note)
  }
  const saveNote=()=>{
    let isUpdate=false
   const newNotes=[...notes].map(item=>{
     if (item.id===seletednotes.id){
       isUpdate=true
       return seletednotes
     }
     else return item
   })
   if(!isUpdate){
     newNotes.push(seletednotes)
   }
   console.log(newNotes)
   setNotes(newNotes)
   localStorage.setItem(LST_LIST_NOTE,JSON.stringify(newNotes))
  }
  const deleteNote=()=>{
    const newNotes=notes.filter(item=>{
      return item.id!==seletednotes.id
      
    })
    setNotes(newNotes)
    localStorage.setItem(LST_LIST_NOTE,JSON.stringify(newNotes))
    newNote()
   }
   const newNote=()=>{
     let maxID=0
      notes.forEach(item=>{
        if (item.id>maxID) maxID=item.id
      })
      maxID=maxID+1
      setSeletedNote({id:maxID,title:"",detail:""})
   }
  console.log("Notes ", notes)
  return (
    <div className="App">
      <Header></Header>
      
      <div className="container">
        <div className="row">
          <SideBar notes={notes} seletedAction={changeSeletedNote} seletednotes={seletednotes}></SideBar>
          <NoteForm note={seletednotes}  seletedAction={changeSeletedNote} saveAction={saveNote} deleteAction={deleteNote} newAction={newNote}></NoteForm>
        </div>
      </div>

    </div>
  );
}

export default App