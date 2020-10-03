import React, { Component } from 'react'

export class UserOutput extends Component{
render(){
    
return <div>
    <p style={{color:"red"} } className="useroutput">Lorem: {this.props.username}</p>
    <p>Lorem 2</p>
    
</div>
}

}
