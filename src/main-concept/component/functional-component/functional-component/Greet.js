import React from 'react';

export function GreetWithoutProps() {
    return <h1>Hello Strenger!</h1>
}
/* In functional components, only one paramerter is passed to componets 
i.e props. props are nothing but HTML attributes given to component.  
 */
const Greet = (props, secondParameter) => {
    console.log('props, secondParameter', props, secondParameter);
    return (
        <div>
            <h1>Hello {props.name}!</h1>
            {props.children}
        </div>
    );
};

export default Greet;