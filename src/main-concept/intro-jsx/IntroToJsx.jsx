import React from 'react';

/*  
1. Embedding Expressions in JSX : use any javascript expresion into {}.
2. You can use {} to assign dynamic value to attribute also single or double quotes for assign string literal.
3. Specifying Children with JSX.
 */
const welcomeMsgWithChildren = (name)=> (
    <div className="greeting">
      <h1>Hello {name ? name: 'Strenger'}!</h1>
      <h2>Good to see you here.</h2>
    </div>
  );
export const welcomeImg = (logo)=><img src={logo} className="Welcome-logo" alt="logo" />;
  /* 
*/
export const welcomeGreating = (props) =>{
    return welcomeMsgWithChildren(props.name);
}
