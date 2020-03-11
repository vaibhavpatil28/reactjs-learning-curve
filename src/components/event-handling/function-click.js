import React from 'react';

function FunctionClick() {
    function clickHandeler() {
        console.log('button clicked !');
    }

    return (
        <div>
            <button onClick={clickHandeler}>Click Me</button>
        </div>
    )
}

export default FunctionClick;