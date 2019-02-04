import React from 'react';


import { SpringSpinner } from 'react-epic-spinners';
//weather animate icon
import { SunShower } from '../../components/SunShower';
import { Cloud } from '../../components/SunShower';
import { ThunderStorm } from '../../components/SunShower';
import { Snow } from '../../components/SunShower';
import { Sunny } from '../../components/SunShower';
import { Rainy } from '../../components/SunShower';
import '../../App.css';

 const Card = (props) => {
    let {weatherMain, weatherDescription, temperature, weatherName, dateDay } = props
     return(
        <div className="card">
            {weatherName !== '' || weatherDescription !== '' || temperature !== '' ? (
              <div>
                {weatherMain === 'Clouds' || weatherMain === 'Fog' ? <Cloud /> : null}
                {weatherMain === 'Clear' ? <Sunny /> : null}
                {weatherMain === 'Mist' ? <Cloud /> : null}
                {weatherMain === 'Rain' ? <Rainy /> : null}
                {weatherMain === 'Haze' ? <Cloud /> : null}
                {weatherMain === 'Drizzle' ? <SunShower /> : null}
                {weatherMain === 'Snow' ? <Snow /> : null}
                {weatherMain === 'Smoke' ? <Cloud /> : null}
                {weatherMain === 'Storm' || weatherMain === 'Thunderstorm' ? (
                  <ThunderStorm />
                ) : null}

                <h2 className="city">{weatherName}</h2>
                <p className="weather">{weatherMain}</p>
                <p className="temp">
                  {temperature}
                  <span>c</span>
                </p>
                <p className="date">{dateDay}</p>
              </div>
            ) : (
              <SpringSpinner
                color="rgba(0,0,0, 0.3)"
                size={100}
                animationDuration={900}
                style={{ margin: '0 auto', marginTop: '120px' }}
              />
            )}
          </div>
     )
         
}

export default Card;