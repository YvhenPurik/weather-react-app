import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import Card from './components/Card/Card'
import Holder from './components/styledComponent/Holder';
import LinckHome from './components/BtnLink/LinckHome';
import WrapInput from './components/styledComponent/WrapInput';
import InputCity from './components/input/Input';
import ButtonGeo from './components/BtnGeo/ButtonGeo';
const API_KEY = '938b822ef391053896523b35f20646db';
var moment = require('moment');




class Cities extends Component {
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


  
  
  

  //
  render() {
    
    console.log(this.state.weatherMain);
    const { weatherName, weatherDescription, temperature, dateDay, weatherMain } = this.state;
    return (
      <div className="App">
      <LinckHome/>
      
      
        <header className="App-header">
        
          
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
  delWeather: (data) => {
    dispatch({ type: 'DELITE_WEATHER', data: data})
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cities);

