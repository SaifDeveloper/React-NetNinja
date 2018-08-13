import React, { Component } from 'react';
import Ninjas from './Ninjas'

class App extends Component {

  state = {
    ninjas:[
      {name:'ryu',age:30,belt:'black',id:1},
      {name:'yoshi',age:25,belt:'yellow',id:2},
      {name:'crystal',age:27,belt:'orange',id:3}
    ]
  }

  render() {
    return (
      <div className="App">
       <h1>My first React App!</h1>
       <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
