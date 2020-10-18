import React from 'react'

export default function noteForm(props){
    return (
        <div className="col-sm-8">
                <form className="note-form">
                    <div className="form-group">
                        <label for="txt-title">Note Title</label>
                        <input type="name" className="form-control" id="txt-title" value={props.notes[0].title}/>
                    </div>
                    <div className="form-group">
                        <label for="txt-body">Note Detail</label>
                        <textarea className="form-control" id="txt-body" rows="15"></textarea>
                    </div>
                    <div className="form-group btn-container">
                        <button type="button" className="btn btn-success btn-new">New</button>
                        <button type="button" className="btn btn-primary action-btn">Save</button>
                        <button type="button" className="btn btn-danger action-btn">Delete</button>

                    </div>
                </form>
            </div>
    )
}