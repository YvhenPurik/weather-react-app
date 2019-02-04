import React, {Component} from 'react';
import Btn from '../../components/styledComponent/btn';

import Tooltip from '@material-ui/core/Tooltip';
import '../../App.css';

 class ButtonGeo extends Component {
     state ={
        sevedCitiesCoutn:''
     }
     render(){
        return(
            <div className="btnHolder">
            <div class="btn-home">Home
                <div class="btn2-home"></div>
            </div>
            <div class="btn-city">Saved cities{this.state.sevedCitiesCoutn}
            
            </div>
         </div> 
            
            
            
         )
     }
     
         
}

export default ButtonGeo;