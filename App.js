import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Alert, } from 'react-native';

import { StyleSheet, Text, View, Image, Alert, TextComponent, } from 'react-native';

import * as Location from 'expo-location';
import Loading from './Loading';
import axios from 'axios';
import Weather from './Weather';






import moment from 'moment-timezone';
import { useEffect, useState } from 'react';




const api_key = 'fbcd201463b740b6ff7b23708e8bf653';


export default class extends React.Component {

  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) => {
    const {data} /*: {main:{temp, pressure, humidity, temp_min, temp_max, temp_night,},wind:{speed, deg},sys:{sunrise, sunset}, name, weather, dt}}*/ = 
    await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&exclude=daily&appid=${api_key}&lang=ru&units=metric`)
    console.log(data.list[8].weather[0].icon)
    console.log(data.list[5].weather[0].icon)
    console.log(data.city.name)

    this.setState({isLoading: false,

      descriptionNow : data.list[0].weather[0].description,
      city: data.city.name,
      pressure: data.list[0].main.pressure,
      tempNow: data.list[0].main.temp,
      humidity: data.list[0].main.humidity,
      sunrise: data.city.sunrise,
      sunset: data.city.sunset,
      speed: data.list[0].wind.speed,
      deg: data.list[0].wind.deg,
      conditionNow: data.list[0].weather[0].id,
      iconNow: data.list[0].weather[0].icon,
      iconThree: data.list[1].weather[0].icon,
      iconSix: data.list[2].weather[0].icon,
      iconNine: data.list[3].weather[0].icon,
      tempThree: data.list[1].main.temp,
      tempSix: data.list[2].main.temp,
      tempNine: data.list[3].main.temp,
      dt_txtThree: data.list[1].dt_txt,
      dt_txtSix: data.list[2].dt_txt,
      dt_txtNine: data.list[3].dt_txt,
      dt_txt1: data.list[8].dt_txt,
      dt_txt2: data.list[16].dt_txt,
      dt_txt3: data.list[24].dt_txt,
      dt_txt4: data.list[31].dt_txt,
      temp1: data.list[8].main.temp,
      temp2: data.list[16].main.temp,
      temp3: data.list[24].main.temp,
      temp4: data.list[31].main.temp,
      icon1: data.list[8].weather[0].icon,
      icon2: data.list[16].weather[0].icon,
      icon3: data.list[24].weather[0].icon,
      icon4: data.list[31].weather[0].icon,

  
    /*this.setState({isLoading: false,
    temp: temp, 
    condition: weather[0].id,
    icon: weather[0].icon,
    description: weather[0].description,
    city: name,
    pressure: pressure,
    humidity: humidity,
    sunrise: sunrise,
    sunset: sunset,
    dt: dt, 
    speed: speed,
    deg: deg,
    temp_max: temp_max,
    temp_min: temp_min,
    
    temp_night: temp_night,*/
   
  });
  
    

  
  
 
     /*

      const dateInMs = sunrise
      const voshod = new Date(dateInMs*1000)
      console.log(voshod)

      const unixTimeSvet = sunrise;
      var date = new Date(unixTimeSvet * 1000);
      // Hours part from the timestamp
      var hours = date.getHours();
      // Minutes part from the timestamp
      var minutes = "0" + date.getMinutes();
      // Seconds part from the timestamp
      var seconds = "0" + date.getSeconds(); 
      
      // Will display time in 10:30:23 format
      var rassvet = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
      
      console.log(rassvet);

      const unixTimeZakat = sunset;
      var date = new Date(unixTimeZakat * 1000);
      // Hours part from the timestamp
      var hours = date.getHours();
      // Minutes part from the timestamp
      var minutes = "0" + date.getMinutes();
      // Seconds part from the timestamp
      var seconds = "0" + date.getSeconds();
      
      // Will display time in 10:30:23 format
      var zakat = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
      
      console.log(zakat);

    */
     

  }

  
 
  getLocation = async () => {
    try {
      const response = await Location.requestForegroundPermissionsAsync();
      console.log(response);
      const location = await Location.getCurrentPositionAsync();
      console.log(location);
      console.log(location.coords.latitude, location.coords.longitude);
      this.getWeather(location.coords.latitude, location.coords.longitude);
      
     
    } catch (error) {
      Alert.alert('Местоположение не определено.', "Подключитесь к сети.")

    } 
    


  }
  componentDidMount() {
    this.getLocation();
  }
  
  
  render () {
    const {isLoading, tempNow, city, pressure, descriptionNow, humidity, sunrise, sunset, speed, deg, conditionNow, iconNow, iconThree, iconSix, iconNine,
       tempThree, tempSix, tempNine, dt_txtThree, dt_txtSix, dt_txtNine, dt_txt1, dt_txt2, dt_txt3, dt_txt4, temp1, temp2, temp3, temp4,
      icon1, icon2, icon3, icon4, } = this.state;
  return (
   isLoading ? <Loading />:  <Weather  descriptionNow={descriptionNow} city={city}  pressure={pressure} tempNow={Math.round(tempNow)} humidity={humidity} 
   sunset={sunset} sunrise={sunrise} speed={Math.round(speed)} deg={deg} conditionNow={conditionNow} iconNow={iconNow} iconThree={iconThree} iconSix={iconSix}
   iconNine={iconNine} tempThree={Math.round(tempThree)} tempSix={Math.round(tempSix)} tempNine={Math.round(tempNine)} dt_txtThree={dt_txtThree}
   dt_txtSix={dt_txtSix} dt_txtNine={dt_txtNine} dt_txt1={dt_txt1} dt_txt2={dt_txt2} dt_txt3={dt_txt3} dt_txt4={dt_txt4} temp1={Math.round(temp1)} temp2={Math.round(temp2)}
   temp3={Math.round(temp3)} temp4={Math.round(temp4)} icon1={icon1} icon2={icon2} icon3={icon3} icon4={icon4}/> 
   

  );
  }


  
}




