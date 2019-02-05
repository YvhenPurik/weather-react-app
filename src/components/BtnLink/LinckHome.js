import React, {Component} from 'react';
import Btn from '../../components/styledComponent/btn';
import {Link} from 'react-router-dom'
import Tooltip from '@material-ui/core/Tooltip';
import '../../App.css';

 class ButtonGeo extends Component {
     state ={
        sevedCitiesCoutn:''
     }


     handlClick(){
         console.log('click')
     }
     render(){
        return(
            <Link to="/" >  
               <div className="btnHolder-home">
          
          <div  class="btn-city">Back{this.state.sevedCitiesCoutn}
          
          </div>
       </div> 
            </Link>
            
            
            
            
         )
     }
     
         
}

export default ButtonGeo;