import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import Card from './components/Card/Card'
import Holder from './components/styledComponent/Holder';
import BtnLink from './components/BtnLink/BtnLink';
import WrapInput from './components/styledComponent/WrapInput';
import InputCity from './components/input/Input';
import ButtonGeo from './components/BtnGeo/ButtonGeo';
const API_KEY = '938b822ef391053896523b35f20646db';
var moment = require('moment');




class App extends Component {
  constructor(props) {
    super(props);
  

    
    

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
    const store = this.props.Store;
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
  theme = {
    main: "mediumseagreen"
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
    // e.preventDefault();
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

        // 
        const localData = JSON.parse(localStorage.getItem('weatherStor'));
        const newWeather = {...localData, [data.id]: data}
        localStorage.setItem('weatherStor', JSON.stringify({...newWeather }));
        this.props.addWeather(data)
      }
    }
  };
  
  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.submitWeather()
    }
  }
  

  //
  render() {
    
    console.log(this.state.weatherMain);
    const { weatherName, weatherDescription, temperature, dateDay, weatherMain } = this.state;
    return (
      <div className="App">
      <BtnLink/>
        <header className="App-header">
        
          <Holder className="holder">
         

            <ButtonGeo 
            ClickBtnGeo={this.getLocation}
            />

           <InputCity 
           change={(e) => this.setState({inputCity: e.target.value})} 
           btnClick={this.submitWeather} 
           enter={this._handleKeyPress}
           />
           
        </Holder>
        <Card 
           weatherMain={weatherMain} 
           dateDay={dateDay}
           temperature={temperature}
           weatherDescription={weatherDescription}
           weatherName={weatherName}
           />
          
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Store: state.weather
})

const mapDispatchToProps = dispatch => ({
  addWeather: (data) => {
    dispatch({ type: 'ADD_WEATHER', data: data})
  },
  updateWeather: (data) => {
    dispatch({ type: 'UPDATE_WEATHER', data: data })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

