import React from 'react';
import './App.css'
// import IntroJSX from './Welcome';
// import Greet,{GreetWithoutProps} from './main-concept/component/functional-component/functional-component/Greet';
import Welcome from './main-concept/component/class-component/Welcome';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <GreetWithoutProps/>
        <Greet name="Vaibhav" className="greet"/> */}
        <Welcome name='Vaibhav'/>
      </div>
    )
  }
}

export default App;
