import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar(props){
    return(
        <>
         <div className='nav-set'>
            <ul className='ul-left'>
            <li className='yellow' onClick={()=>props.mode('yellows')}></li>
            <li className='orange' onClick={()=>props.mode('oranges')}></li>
            <li className='green' onClick={()=>props.mode('greens')}></li>
            <li className='blue' onClick={()=>props.mode('blues')}></li>
            <li className='red' onClick={()=>props.mode('reds')}></li>
            <li className='white' onClick={()=>props.mode('whites')}></li>
            </ul>
            <ul className='ul-right'>
            <li><Link to="/">Home </Link></li>
            <li><Link to="/Business">Business </Link></li>
            <li><Link to="/entertainment">Entertainment</Link></li>
            <li><Link to="/general">General </Link></li>
            <li><Link to="/health">Health </Link></li>
            <li><Link to="/science">Science </Link></li>
            <li><Link to="/sports">Sports </Link></li>
            <li><Link to="/technology">Technology </Link></li>
            </ul>
         </div>
       
        </>
    )
}