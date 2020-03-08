import React from 'react';
import './App.css'
import Welcome from './Welcome';
import Greet,{GreetWithoutProps} from './main-concept/functional-component/Greet'
class App extends React.Component {
  render() {
    return (
      <div className="Welcome">
        {/* <Welcome name='Vaibhav' />; */}
        <GreetWithoutProps/>
        <Greet name="Vaibhav" className="greet"/>
      </div>
    )
  }
}

export default App;
