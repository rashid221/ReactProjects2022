import React from 'react';

function Sidebar(props){
    return(<>
     
    <h1 className="app1">{props.name}</h1>
    <h1 className="app2">{props.side}</h1>
    </>)
}
export default Sidebar;