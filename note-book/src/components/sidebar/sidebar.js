import React, { useCallback, useState } from 'react'
import SearchBar from './search-bar/searchBar'
import ListNote from './list-note/listNote'

const SideBar = (props) => {
    const originNotes = props.notes
    const [cloneNotes, setClone] = useState(originNotes)
    if (cloneNotes!=originNotes)
        setClone(originNotes)
    const search = (event) => {
        setClone(originNotes.filter(item=>item.title.includes(event.target.value)))
    }

    return (
        <div className="col-sm-4">
            <SearchBar search={search}></SearchBar>
            <h5>All notes</h5>
            <ListNote notes={cloneNotes} seletedAction={props.seletedAction} seletednotes={props.seletednotes}></ListNote>
        </div>
    )
}
export default SideBar