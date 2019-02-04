import React from 'react';
import ButtonGeoStyle from '../../components/styledComponent/ButtonGeoStyle';

import Tooltip from '@material-ui/core/Tooltip';
import '../../App.css';

 const ButtonGeo = (props) => {
     return(
        <Tooltip  title="Your location" placement="bottom">
              <ButtonGeoStyle onClick={props.ClickBtnGeo}>
                <svg
                  className="change-color"
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </ButtonGeoStyle>
            </Tooltip>
     )
         
}

export default ButtonGeo;