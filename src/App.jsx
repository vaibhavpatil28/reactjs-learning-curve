import React from 'react';
import './App.css'
// import Hello from './main-concept/intro-jsx/hello';
// import Greet, { GreetWithoutProps } from './main-concept/component/functional-component/functional-component/Greet';
// import Welcome from './main-concept/component/class-component/Welcome';
// import Counter from './components/counter';
// import DestructureGreet, {DestructureGreetAfter} from './components/destructure-props-and-state/destructure-greet';
// import DestructureWelcome from './components/destructure-props-and-state/destructure-welcome';
// import FunctionClick from './components/event-handling/function-click';
// import ClassClick from './components/event-handling/class-click';
import EventBind from './components/binding-event-handler/event-bind';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <EventBind/>
        {/* 
        <ClassClick/>
        <FunctionClick/>
        <GreetWithoutProps />
        <Hello name="Vaibhav" />
        <Greet name="Vaibhav" className="greet">
          <p>Hey it's children...</p>
        </Greet>
        <Welcome name='Vaibhav'>
          <p>Hey it's children of Welcome component...</p>
        </Welcome>
        <Greet name="Vaibhav" className="greet" />
        <Welcome name='Vaibhav' />
        <Counter />
        <DestructureGreetAfter name="Diana" heroName="Wonder Woman"/>
        <DestructureGreet name="Robert" heroName="Iron Man"/>
        <DestructureWelcome name="Bruce" heroName="Batman" /> */}
      </div>
    )
  }
}

export default App;
