import React,{Component} from 'react';
import loading from './loading.gif';


export class Spinner extends Component{
  constructor(){
    super();
    
  }

    render(){
        return(
            <>
            <img src={loading} alt={this.props.alts}/>
            </>

        )
    }
}
export default Spinner;