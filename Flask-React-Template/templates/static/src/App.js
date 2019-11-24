import React, {Component} from 'react'
import Test from "./components/Test";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isVisible: true
    };
  }

  render() {
    const { isVisible } = this.state;
    return (
      <div>
        <h1>My React App</h1>
        <Test />
      </div>
    )
  }
}


export default App
