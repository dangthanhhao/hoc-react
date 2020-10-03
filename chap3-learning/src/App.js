import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'
// function App() {

//   // return React.createElement('div',{className: 'App'},React.createElement('h1',null,`I'm react app`))
// }

// class App extends Component {
//   state = {
//     personname:["hao", "a"]
//   }
//   render() {
//     return (
//       <div className="App">
//         <Person name={this.state.personname[0]}></Person>
//         <Person name={this.state.personname[1]}></Person>
//         <button onClick={() => this.setState( {personname : ["DA", "DD"]} ) }>Click me</button>
//       </div>
//     );
//   }
// }
// export default App;
const App = ()=>{
    const [personState, personStateChange] =useState({person: ["Hao","TH"]})
    const changeState= (value)=>{
      personStateChange({person:[value,"XXX"]});
    }
    const typeChange=(event)=>{
      personStateChange({person: [event.target.value,"TH"]})
    }
    return(
      <div className="App">
        <Person name={personState.person[0]} typeChange={typeChange}/>
        <Person name={personState.person[1]} />
      </div>
    );
}
export default App;
