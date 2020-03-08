import React from 'react';
import './App.css'
// import Hello from './main-concept/intro-jsx/hello';
import Greet, { GreetWithoutProps } from './main-concept/component/functional-component/functional-component/Greet';
import Welcome from './main-concept/component/class-component/Welcome';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <GreetWithoutProps/>
        <Hello name="Vaibhav"/>
        <Greet name="Vaibhav" className="greet">
        <p>Hey it's children...</p>
        </Greet>
        <Welcome name='Vaibhav'>
        <p>Hey it's children of Welcome component...</p>
      </Welcome> */}
        <Greet name="Vaibhav" className="greet" />
        <Welcome name='Vaibhav' />
      </div>
    )
  }
}

export default App;
