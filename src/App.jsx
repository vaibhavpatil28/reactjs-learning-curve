import React from 'react';
import './App.css'
import Welcome from './Welcome';
class App extends React.Component {
  render() {
    return (
      <div className="Welcome">
        <Welcome name='Vaibhav' />;
      </div>
    )
  }
}

export default App;
