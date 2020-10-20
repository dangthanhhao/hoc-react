import React from 'react'

export default (props) => {
    return (
        <div className="search-bar">
            <input type="search" className="form-control input-search" onChange={props.search}/> 
            <button className="btn btn-primary btn-search" type="submit">Search</button>
        </div>
    )
}