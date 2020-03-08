import React, { Component } from 'react';

class DestructureWelcome extends Component {

    render() {
        let { name, heroName } = this.props;// destructure props
        // const { state1, state2 } = this.state;// destructure state 
        name = '"modified Name"'; // can modified props here but don't.
        return (
            <div style={{ 'border': '1px solid' }}>
                <h1>Welcome {name} ! a.k.a {heroName}</h1>
            </div>
        )
    }
}

export default DestructureWelcome;