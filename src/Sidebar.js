import React from 'react';
import PropTypes from 'prop-types'


function Sidebar(props){
    return(<>
     
    <h1 className="app1">{props.name}</h1>
    <h1 className="app2">{props.side}</h1>
    </>)
}
export default Sidebar;
Sidebar.propTypes = {
    name: PropTypes.string.isRequired,
    side:PropTypes.string
}      
// Sidebar.defaultProps = {
//     name: 'set name here',
//     side: 'left side here'

// }