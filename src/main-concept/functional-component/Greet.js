import React from 'react';

export function GreetWithoutProps() {
    return <h1>Hello Strenger!</h1>
}

const Greet = (props, secondParameter) => {
    console.log('props, secondParameter', props, secondParameter);
    return <h1>Hello {props.name}!</h1>;
};

export default Greet;