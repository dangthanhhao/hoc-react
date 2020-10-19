import React from 'react'
import SearchBar from './search-bar/searchBar'
import ListNote from './list-note/listNote'

const sideBar= (props) => {
    
    return (
         <div className="col-sm-4">
               <SearchBar></SearchBar>
                <h5>All notes</h5>
                <ListNote notes={props.notes} seletedAction={props.seletedAction} seletednotes={props.seletednotes}></ListNote>
            </div>
    )
}
export default sideBar