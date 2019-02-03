import React, { Component } from 'react';
import './App.css';
import { SpringSpinner } from 'react-epic-spinners';
//weather animate icon
import { SunShower } from './components/SunShower';
import { Cloud } from './components/SunShower';
import { ThunderStorm } from './components/SunShower';
import { Snow } from './components/SunShower';
import { Sunny } from './components/SunShower';
import { Rainy } from './components/SunShower';
import Tooltip from '@material-ui/core/Tooltip';

import Holder from './components/styledComponent/Holder';
import WrapInput from './components/styledComponent/WrapInput';
import Input from './components/styledComponent/Input';
import ButtonGeo from './components/styledComponent/ButtonGeo';
const API_KEY = '938b822ef391053896523b35f20646db';
var moment = require('moment');

class App extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();

    this.state = {
      posLong: undefined,
      posLat: undefined,
      weatherName: '',
      weatherDescription: '',
      weatherMain: '',
      temperature: '',
      dateDay: moment().format('MMMM Do YYYY'),
      inputCity: '',
    };
  }
  componentDidMount() {
    this.getLocation();
  }

  getLocation = () => {
    let lat;
    let long;
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        function success(position) {
          console.log('latitude', position.coords.latitude, 'longitude', position.coords.longitude);
          lat = position.coords.latitude;
          long = position.coords.longitude;
          this.setState({
            posLong: long,
            posLat: lat,
          });
          this.getWeather(lat, long);
        }.bind(this),
        function error(error_message) {
          console.error('error', error_message);
          this.getWeather(lat, long);
        }
      );
    }
  };

  getWeather = async (lt, lg) => {
    console.log('Getting Weather...');

    const lat = lt;
    const long = lg;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
    );

    const data = await api_call.json();

    if (data.message !== 'city not found') {
      this.setState({
        weatherName: data.name,
        weatherDescription: data.weather[0].description,
        temperature: Math.round(data.main.temp - 273),
        weatherMain: data.weather[0].main,
      });
      console.log(data);
    }
  };

  submitWeather = async e => {
    e.preventDefault();

    if (this.state.inputCity !== '') {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputCity}&appid=${API_KEY}`
      );

      const data = await api_call.json();
      // console.log(data);

      if (data.message !== 'city not found') {
        this.setState({
          weatherName: data.name,
          weatherDescription: data.weather[0].description,
          weatherMain: data.weather[0].main,
          temperature: Math.round(data.main.temp - 273),
        });
      }
    }
  };

  //
  render() {
    console.log(this.state.weatherMain);
    const { weatherName, weatherDescription, temperature, dateDay, weatherMain } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Holder className="holder">
            <Tooltip style={{ fontSize: '22' }} title="Your location" placement="bottom">
              <ButtonGeo onClick={this.getLocation}>
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
              </ButtonGeo>
            </Tooltip>
            <WrapInput className="shadow">
              <Input
                ref={this.inputRef}
                onMouseEnter={() => {
                  this.inputRef.current.focus();
                }}
                onChange={e => this.setState({ inputCity: e.target.value })}
                type="text"
                id="search"
                placeholder="Enter City...Eng"
              />
              <Tooltip title="Search location" placement="bottom">
                <button onClick={this.submitWeather}>
                  <svg
                    className="change-color"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </button>
              </Tooltip>
            </WrapInput>
          </Holder>

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
        </header>
      </div>
    );
  }
}

export default App;
