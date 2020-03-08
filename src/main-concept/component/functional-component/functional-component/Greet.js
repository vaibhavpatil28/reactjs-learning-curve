import React from 'react';

export function GreetWithoutProps() {
    return <h1>Hello Strenger!</h1>
}
const modifyChildren= ()=> <p>modified children content</p>
function modifyProps(props) {
    const children = modifyChildren();
    props={...props, ...{children}};
    return props;
}

/* In functional components, only one paramerter is passed to componets 
i.e props. props are nothing but HTML attributes given to component.  
 */
const Greet = (props, secondParameter) => {
    console.log('props, secondParameter', props, secondParameter);
    const newProps = modifyProps(props);
    props={...newProps, ...{className:'modifinedGreet'}};
    console.log('After modification of props', props);
    return (
        <div>
            <h1>Hello {props.name}!</h1>
            {props.children}
        </div>
    );
};

export default Greet;