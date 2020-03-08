import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    /**
     * output is 1, because react call multiple setState() call into 
     * a single update for better performance
     */ 
    increment() {
        // this.state.count =  this.state.count +1; // wrong 
        // const count = this.state.count +1;
        // this.state = {...this.state, ...{count}}; // wrong
        this.setState({
            count: this.state.count +1
        }, ()=>{
            console.log('After updating state of component', this.state.count);
        }); // call to setState is async.
        console.log('this.state.count', this.state.count);
    }
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    /**
     *  This can overcome the issue of multiple call of setState() method. 
     */
    incrementWithPrevStaete(){
        /**
         * Here we can pass a function having two parameters 
         * i.e @prevState (previousState) and @props
         */
        this.setState((prevState, props)=>{
            return {
                count: prevState.count+1
            };
        });
    }
    currentIncrementFive(){
        this.incrementWithPrevStaete();
        this.incrementWithPrevStaete();
        this.incrementWithPrevStaete();
        this.incrementWithPrevStaete();
        this.incrementWithPrevStaete();
    }
    render() {
        return (
            <div>
                <div>count : {this.state.count}</div>
                <button onClick={()=> this.currentIncrementFive()} >Increment</button>
            </div>
        )
    }
}

export default Counter;