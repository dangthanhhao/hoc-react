import React, { useState } from 'react'

const ListNote= (props) =>{


    const selectedOnClick=(note)=>{

        props.seletedAction(note)
    }

    const noteItems=props.notes.map(item => {
        let style="card"
        if (props.seletednotes&&item.id===props.seletednotes.id)
            style= style+ " note-item"
        return (<div
            key={item.id}
            className={style} 
            onClick={()=>selectedOnClick(item)}
        >
            <div className="card-body">
                {item.title}
            </div>
        </div>);
    })

   
    return (
        <div className="listnote scrollbar-primary">
            {noteItems}
        </div>
    )
}
export default ListNote