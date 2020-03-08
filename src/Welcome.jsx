import React,{ Component } from 'react';

// const name = 'Josh Perez';
// const element = <h1>Hello, {this.props.name}</h1>;

class Welcome extends Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
export default Welcome;