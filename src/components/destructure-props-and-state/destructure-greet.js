import React from 'react';

const DestructureGreet = ({name, heroName}) => {
    console.log('name, heroName: ', name, heroName);
    name = 'changed from internal' // does't change props value
    return (
        <div>
            <h1>Hello {name} ! a.k.a {heroName}</h1>
        </div>
    );
};
export const DestructureGreetAfter = (props) => {
    const {name, heroName} = props;
    console.log('name, heroName: ', name, heroName);
    return (
        <div>
            <h1>Hello {name} ! a.k.a {heroName}</h1>
        </div>
    );
};
export default DestructureGreet;