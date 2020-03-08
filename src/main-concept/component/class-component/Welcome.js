import React, { Component } from 'react';
/* props vs states */
class Welcome extends Component {
    constructor() {
        super();
    }
    render() {
        this.props = {
            name: 'Ajinkya'
        }
        return (
            <div style={{ 'border': '1px solid' }}>
                <h1>Hello {this.props.name}!</h1>
                {this.props.children}
            </div>
        )
    }
}

export default Welcome;