import React from 'react'

export default function noteForm(props){
    
const titlechange=(event)=>{
   const newNote={...props.note}
   newNote.title=event.target.value
   props.seletedAction(newNote)
    
}
const contentchange=(event)=>{
    const newNote={...props.note}
    newNote.detail=event.target.value
    props.seletedAction(newNote)
     
 }
    return (
        <div className="col-sm-8">
                <form className="note-form">
                    <div className="form-group">
                        <label htmlFor="txt-title">Note Title</label>
                        <input type="name" className="form-control" id="txt-title" value={(props.note)?props.note.title:""} onChange={titlechange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="txt-body">Note Detail</label>
                        <textarea className="form-control" id="txt-body" rows="15"  value={(props.note)?props.note.detail:"" } onChange={contentchange}></textarea>
                    </div>
                    <div className="form-group btn-container">
                        <button type="button" className="btn btn-success btn-new" onClick={props.newAction}>New</button>
                        <button type="button" className="btn btn-primary action-btn" onClick={props.saveAction}>Save</button>
                        <button type="button" className="btn btn-danger action-btn" onClick={props.deleteAction}>Delete</button>

                    </div>
                </form>
            </div>
    )
}