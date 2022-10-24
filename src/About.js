import React from 'react';


function About(props){
    return(
        <>
        <h1>about page</h1>
        <button onClick={props.modes}>toggle</button>
        </>
    )
}
export default About;