import React, { Component } from 'react';

class EventBind extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello'
        };
        /* bind this to event handeler function. 
        This is best way for binding 'this' to event handeler method.  */
        this.clickHandeler = this.clickHandeler.bind(this);
    }

    clickHandeler() {
        this.setState({
            message: 'Goodbye!'
        });
        console.log(this);
    }
    /* bind 'this' to event handeler function using the 
    experimental public class fields syntax */
    mouseEnterHandeler = () => {
        this.setState((prevState, props) => {
            return { message: 'Mouse enter in button' }
        });
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* bind by calling bind method */}
                {/* <button onClick={this.clickHandeler.bind(this)}>Click Me</button> */}

                {/* bind by passing arror function */}
                {/* <button onClick={()=>{this.clickHandeler()}}>Click Me</button> */}
                <button onClick={this.clickHandeler} onMouseEnter={this.mouseEnterHandeler}>Click Me</button>
            </div>
        );
    }
}

export default EventBind;