import React from 'react'
import SearchBar from './search-bar/searchBar'
import ListNote from './list-note/listNote'
export default () => {
    return (
         <div class="col-sm-4">
               <SearchBar></SearchBar>
                <h5>All notes</h5>
                <ListNote></ListNote>
            </div>
    )
}