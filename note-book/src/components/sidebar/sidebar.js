import React, { useCallback, useState } from 'react'
import SearchBar from './search-bar/searchBar'
import ListNote from './list-note/listNote'

const SideBar = (props) => {
    const originNotes = props.notes
    const [cloneNotes, setClone] = useState({search:null})
  
    
    const search = (event) => {
        setClone({notes: originNotes.filter(item=>item.title.includes(event.target.value)), search: event.target.value})
    }
    const listToShow= (cloneNotes.search)? originNotes.filter(item=>item.title.includes(cloneNotes.search))  : originNotes

    return (
        <div className="col-sm-4">
            <SearchBar search={search}></SearchBar>
            <h5>All notes</h5>
            <ListNote notes={listToShow} seletedAction={props.seletedAction} seletednotes={props.seletednotes}></ListNote>
        </div>
    )
}
export default SideBar