import React from 'react';

import { StyleSheet, Text, View, Image, StatusBar, ImageBackground, FlatList} from 'react-native';






console.log('statusBarHeight: ', StatusBar.currentHeight);


const weatherOptions = {

    /*Rain & Drizzle*/
    500: {iconName: 'weather-pouring',backImg: require ('./rainbow.jpg'), iconLink: 'http://openweathermap.org/img/wn/10d@2x.png'},
    501: {iconName: 'weather-pouring',backImg: require ('./rainheart.jpg'), iconLink: 'http://openweathermap.org/img/wn/09d@2x.png'},
    502: {iconName: 'weather-pouring',backImg: require ('./rainheart.jpg'), iconLink: 'http://openweathermap.org/img/wn/09d@2x.png'},
    503: {iconName: 'weather-pouring',backImg: require ('./rainheart.jpg'), iconLink: 'http://openweathermap.org/img/wn/09d@2x.png'},
    504: {iconName: 'weather-pouring',backImg: require ('./rainheart.jpg'), iconLink: 'http://openweathermap.org/img/wn/09d@2x.png'},
    511: {iconName: 'weather-pouring',backImg: require ('./rainheart.jpg'), iconLink: 'http://openweathermap.org/img/wn/13d@2x.png'},
    520: {iconName: 'weather-pouring',backImg: require ('./rainheart.jpg'), iconLink: 'http://openweathermap.org/img/wn/09d@2x.png'},
    521: {iconName: 'weather-pouring',backImg: require ('./rainheart.jpg'), iconLink: 'http://openweathermap.org/img/wn/09d@2x.png'},
    522: {iconName: 'weather-pouring',backImg: require ('./rainheart.jpg'), iconLink: 'http://openweathermap.org/img/wn/09d@2x.png'},
    531: {iconName: 'weather-pouring',backImg: require ('./rainheart.jpg'), iconLink: 'http://openweathermap.org/img/wn/09d@2x.png'},
    300: {iconName: 'weather-pouring',backImg: require ('./drizzle.jpg'), iconLink: 'http://openweathermap.org/img/wn/09d@2x.png'},
    301: {iconName: 'weather-pouring',backImg: require ('./drizzle.jpg'), iconLink: 'http://openweathermap.org/img/wn/09d@2x.png'},
    302: {iconName: 'weather-pouring',backImg: require ('./drizzle.jpg'), iconLink: 'http://openweathermap.org/img/wn/09d@2x.png'},
    310: {iconName: 'weather-pouring',backImg: require ('./drizzle.jpg'), iconLink: 'http://openweathermap.org/img/wn/09d@2x.png'},
    311: {iconName: 'weather-pouring',backImg: require ('./drizzle.jpg'), iconLink: 'http://openweathermap.org/img/wn/09d@2x.png'},
    312: {iconName: 'weather-pouring',backImg: require ('./drizzle.jpg'), iconLink: 'http://openweathermap.org/img/wn/09d@2x.png'},
    313: {iconName: 'weather-pouring',backImg: require ('./drizzle.jpg'), iconLink: 'http://openweathermap.org/img/wn/09d@2x.png'},
    314: {iconName: 'weather-pouring',backImg: require ('./drizzle.jpg'), iconLink: 'http://openweathermap.org/img/wn/09d@2x.png'},
    321: {iconName: 'weather-pouring',backImg: require ('./drizzle.jpg'), iconLink: 'http://openweathermap.org/img/wn/09d@2x.png'},


/*Clear*/ 
    800: {
        iconName: 'weather-sunny',
        backImg: require ('./sunny.jpg'),
        color: 'orange',
        iconLink: 'http://openweathermap.org/img/wn/01d@2x.png',
        
    },

    /*Clouds */
    801: {iconName: 'weather-cloudy',backImg: require ('./cloudy.jpeg'), iconLink: 'http://openweathermap.org/img/wn/02d@2x.png'},
    802: {iconName: 'weather-cloudy', backImg: require ('./cloudy.jpeg'), iconLink: 'http://openweathermap.org/img/wn/03d@2x.png'},
    803: {iconName: 'weather-cloudy',backImg: require ('./cloudy.jpeg'), iconLink: 'http://openweathermap.org/img/wn/04d@2x.png'},
    804: {iconName: 'weather-cloudy',backImg: require ('./cloudy.jpeg'), iconLink: 'http://openweathermap.org/img/wn/04d@2x.png'},

/*Thunderstorm*/ 
    200: {iconName: 'weather-lightning-rainy',backImg: require ('./thunderstorm.jpg'), iconLink: 'http://openweathermap.org/img/wn/11d@2x.png'},
    201: {iconName: 'weather-lightning-rainy',backImg: require ('./thunderstorm.jpg'), iconLink: 'http://openweathermap.org/img/wn/11d@2x.png'},
    202: {iconName: 'weather-lightning-rainy',backImg: require ('./thunderstorm.jpg'), iconLink: 'http://openweathermap.org/img/wn/11d@2x.png'},
    210: {iconName: 'weather-lightning-rainy',backImg: require ('./thunderstorm.jpg'), iconLink: 'http://openweathermap.org/img/wn/11d@2x.png'},
    211: {iconName: 'weather-lightning-rainy',backImg: require ('./thunderstorm.jpg'), iconLink: 'http://openweathermap.org/img/wn/11d@2x.png'},
    212: {iconName: 'weather-lightning-rainy',backImg: require ('./thunderstorm.jpg'), iconLink: 'http://openweathermap.org/img/wn/11d@2x.png'},
    221: {iconName: 'weather-lightning-rainy',backImg: require ('./thunderstorm.jpg'), iconLink: 'http://openweathermap.org/img/wn/11d@2x.png'},
    230: {iconName: 'weather-lightning-rainy',backImg: require ('./thunderstorm.jpg'), iconLink: 'http://openweathermap.org/img/wn/11d@2x.png'},
    231: {iconName: 'weather-lightning-rainy',backImg: require ('./thunderstorm.jpg'), iconLink: 'http://openweathermap.org/img/wn/11d@2x.png'},
    232: {iconName: 'weather-lightning-rainy',backImg: require ('./thunderstorm.jpg'), iconLink: 'http://openweathermap.org/img/wn/11d@2x.png'},


    /*Snow*/ 
    600: {iconName: 'weather-snowy-heavy', backImg: require ('./snow.jpg'), iconLink: 'http://openweathermap.org/img/wn/13d@2x.png'}, 
    601: {iconName: 'weather-snowy-heavy', backImg: require ('./snow.jpg'), iconLink: 'http://openweathermap.org/img/wn/13d@2x.png'}, 
    602: {iconName: 'weather-snowy-heavy', backImg: require ('./snow.jpg'), iconLink: 'http://openweathermap.org/img/wn/13d@2x.png'},
    611: {iconName: 'weather-snowy-heavy', backImg: require ('./snow.jpg'), iconLink: 'http://openweathermap.org/img/wn/13d@2x.png'},
    612: {iconName: 'weather-snowy-heavy', backImg: require ('./snow.jpg'), iconLink: 'http://openweathermap.org/img/wn/13d@2x.png'},
    613: {iconName: 'weather-snowy-heavy', backImg: require ('./snow.jpg'), iconLink: 'http://openweathermap.org/img/wn/13d@2x.png'},
    615: {iconName: 'weather-snowy-heavy', backImg: require ('./snow.jpg'), iconLink: 'http://openweathermap.org/img/wn/13d@2x.png'},
    616: {iconName: 'weather-snowy-heavy', backImg: require ('./snow.jpg'), iconLink: 'http://openweathermap.org/img/wn/13d@2x.png'},
    620: {iconName: 'weather-snowy-heavy', backImg: require ('./snow.jpg'), iconLink: 'http://openweathermap.org/img/wn/13d@2x.png'},
    621: {iconName: 'weather-snowy-heavy', backImg: require ('./snow.jpg'), iconLink: 'http://openweathermap.org/img/wn/13d@2x.png'},
    622: {iconName: 'weather-snowy-heavy', backImg: require ('./snow.jpg'), iconLink: 'http://openweathermap.org/img/wn/13d@2x.png'},

    /* Atmosphere*/ 
    701: {
        iconName: 'weather-fog',
        backImg: require ('./fog.jpg'), iconLink: 'http://openweathermap.org/img/wn/50d@2x.png'
    }, 
    711: {
        iconName: 'weather-fog',
        backImg: require ('./fog.jpg'), iconLink: 'http://openweathermap.org/img/wn/50d@2x.png'
    },
    721: {
        iconName: 'weather-fog',
        backImg: require ('./fog.jpg'), iconLink: 'http://openweathermap.org/img/wn/50d@2x.png'
    },
    731: {
        iconName: 'weather-fog',
        backImg: require ('./fog.jpg'), iconLink: 'http://openweathermap.org/img/wn/50d@2x.png'

    },
    741: {
        iconName: 'weather-fog',
        backImg: require ('./fog.jpg'), iconLink: 'http://openweathermap.org/img/wn/50d@2x.png'
    },
    761: {
        iconName: 'weather-fog',
        backImg: require ('./fog.jpg'), iconLink: 'http://openweathermap.org/img/wn/50d@2x.png'
    },
 

}



export default function Weather ({city, descriptionNow, pressure, tempNow, humidity, sunrise, sunset, speed, deg, conditionNow, iconNow, 
    iconThree, iconSix, iconNine, tempThree, tempSix, tempNine, dt_txtThree, dt_txtSix, dt_txtNine, dt_txt1, dt_txt2, dt_txt3, dt_txt4,
    temp1, temp2, temp3, temp4, icon1, icon2, icon3, icon4,}){
   

   
    const unixTimeSvet = sunrise;
    var date = new Date(unixTimeSvet * 1000);
    // Hours part from the timestamp
    var hours =  date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

   

  
    
    // Will display time in 10:30:23 format
    var rassvet = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) ;
    
    console.log(sunset);
    const unixTimeZak = sunset;
    var date = new Date(unixTimeZak * 1000);
    // Hours part from the timestamp
    var hours =  date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

   

  
    
    // Will display time in 10:30:23 format
    var zakat = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) ;
    
    console.log(zakat);


    const davlenie = pressure/1.33317;


    
      /*Определение направления ветра*/ 
           
           
            if (deg>0 && deg <=22) {
            storonaSveta = 'Север';
            }
            else if (23<=deg && deg<=67) {
            storonaSveta = 'Северо-Восток';
            }
            else if (68<=deg && deg<=112) {
                storonaSveta = 'Восток';
            }
            else if (113<=deg && deg<=157) {
                    storonaSveta = 'Юго-Восток';
            }
            else if (158<=deg && deg<=202) {
                    storonaSveta = 'Юг';
            }
            else if (203<=deg && deg<=247) {
                storonaSveta = 'Юго-Запад';
            }
            else if (248<=deg && deg<=292) {
                 storonaSveta = '3апад';
            }
            else if (293<=deg && deg<=337) { 
                storonaSveta = 'Северо-Запад';
             }
             else if (338<=deg && deg<=359) {
                storonaSveta = 'Север'; 
            }
            else {
            storonaSveta = 'Штиль';
            }
            
         
            var re = /n/gi;
            var str = icon1;
            var icon1d = str.replace(re, 'd');

            var re = /n/gi;
            var str = icon2;
            var icon2d = str.replace(re, 'd');

            var re = /n/gi;
            var str = icon3;
            var icon3d = str.replace(re, 'd');

            var re = /n/gi;
            var str = icon4;
            var icon4d = str.replace(re, 'd');





 



    return (
       



        
            <ImageBackground style = {styles.container} source={weatherOptions[conditionNow].backImg}  resizeMode="cover">  
            <StatusBar backgroundColor="transparent" translucent={true} style = "auto" barStyle="light-content"/>

          
            

            
            <View style = {styles.opisaniePogoda}>
            
            <Text style = {styles.textHeader} >{city}</Text>
            
            <Text style={styles.textPogoda}>Давление: {Math.round(davlenie)} мм.рт.ст.</Text>
            <Text style = {styles.textPogoda} >Влажность: {humidity}%</Text>
            <Text style = {styles.textPogoda} >Скорость ветра: {speed} м/с</Text>
            <Text style = {styles.textPogoda} >Направление ветра: {storonaSveta}</Text>
            <Text style = {styles.textPogoda} >Восход: {rassvet}</Text>
            <Text style = {styles.textPogoda} >Закат: {zakat}</Text>
            </View>
           

            <View style = {styles.halfContainer}>
                <View style = {styles.center}>
            
           <Text style={styles.temp}>{tempNow}°C</Text>
           <Image style = {styles.icon}  source={{uri: "http://openweathermap.org/img/wn/"+iconNow+"@2x.png"}}/> 
           <Text style={styles.textZagolovok}>{descriptionNow}</Text>
           </View>
            </View>

            <View style = {styles.weatherPerHour}>
                <View style = {styles.perHour}>
                <Text style={styles.tempHour}>{tempThree}°C</Text>
                <Image style = {styles.iconHour}  source={{uri: "http://openweathermap.org/img/wn/"+iconThree+"@2x.png"}}/>
                <Text style={styles.timeHour}>{dt_txtThree.substr(11,5)}</Text>
                </View>
                <View style = {styles.perHour}>
                <Text style={styles.tempHour}>{tempSix}°C</Text>
                <Image style = {styles.iconHour}  source={{uri: "http://openweathermap.org/img/wn/"+iconSix+"@2x.png"}}/>
                <Text style={styles.timeHour}>{dt_txtSix.substr(11,5)}</Text>
                </View>
                <View style = {styles.perHour}>
                <Text style={styles.tempHour}>{tempNine}°C</Text>
                <Image style = {styles.iconHour}  source={{uri: "http://openweathermap.org/img/wn/"+iconNine+"@2x.png"}}/>
                <Text style={styles.timeHour}>{dt_txtNine.substr(11,5)}</Text>
                </View>




            </View>

           
            <View style = {styles.weatherDays}>
            <Text style = {styles.text5days}>Погода на ближайшие 4 дня</Text>
            
            <View style = {styles.weatherPerDays}>
           
           
           <FlatList 
            showsHorizontalScrollIndicator={false}
            horizontal
            data={
            [
                {dataD:dt_txt1,ooo:temp1,tyu:icon1d},
                {dataD:dt_txt2,ooo:temp2,tyu:icon2d},
                {dataD:dt_txt3,ooo:temp3,tyu:icon3d},
                {dataD:dt_txt4,ooo:temp4,tyu:icon4d},
            ]
           }
           renderItem={({item}) => 
           
            <View style = {styles.perDays}>
                <Text style={styles.tempDays}>{item.ooo}°C</Text>
                <Image style = {styles.iconDays}  source={{uri: "http://openweathermap.org/img/wn/"+item.tyu+"@2x.png"}}/>
                
           <Text style={styles.timeDays}>{item.dataD.substr(8,2)}</Text>
           </View>
         
       
       
    } 
           />
            </View>
            </View>
            
            </ImageBackground>
         

    )
}


/*

Weather.propTypes = {
temp: propTypes.number.isRequired,
condition: propTypes.oneOf([801,800,802,803,804,701,711,721,731,741,761,600,601,602,611,612,613,615,616,620,621,622,500,501,502,503,504,511,520,521,522,531,300,301,302,310,311,312,313,314,321,200,201,202,210,211,212,221,230,231,232,]).isRequired,
}
*/

const styles = StyleSheet.create({




    container: {
        flex: 1,
        justifyContent: 'center',
       
        backgroundColor: 'darkblue',
        
    },

    header:{
        flex: 0.1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        alignSelf: "flex-end",
        paddingRight: 20,
        color: 'white',
        paddingTop: 10,
        fontFamily: 'LatoBold',
        fontSize: 60,
        textShadowColor: 'black',
        textShadowRadius: 2,
        

    },
    textHeader:{
        color: 'white',
        
        fontFamily: 'LatoBold',
        fontSize: 25,
       textShadowColor: 'black',
        textShadowOffset:{width: 2.2, height: 2.2},
       
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        alignSelf: "flex-end", 
        
        
       
        

    },

    textPogoda:{
        color: 'white',
        
        fontFamily: 'LatoBold',
        fontSize: 15,
    },


    halfContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -30,
    },

    weatherPerHour:{
        flex: 2,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        marginTop: -40,
       
    }, 

    perHour:{
        backgroundColor: 'rgba(0, 73, 200, 0.50)',
        borderRadius: 30, 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150,
        width: 100,
        height: 135,
        padding: 7,
    },

    iconHour:{
        width: 70,
        height: 70,
        
    },

    tempHour:{
        color: 'white',
       
        fontWeight: 'bold',
        fontSize: 20,
        textShadowColor: 'black',
        textShadowOffset:{width: 2, height: 2},
        
    },

    timeHour:{
        color: 'white',
        
        fontWeight: 'bold',
        fontSize: 20,
        textShadowColor: 'black',
        textShadowOffset:{width: 2, height: 2},
       backgroundColor:'rgba(0,90,189,0.50)',
       padding: 5,
       borderRadius: 15,
    },

    center:{
        backgroundColor: 'rgba(0, 73, 200, 0.50)',
        borderRadius: 60, 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150,
        width: 190,
        height: 200,
        padding: 25,

    },

    

    
    temp:{
        color: 'white',
        marginTop: 50,
        fontWeight: 'bold',
        fontSize: 25,
        textShadowColor: 'black',
        textShadowOffset:{width: 2, height: 2},
        marginBottom: -20,
    },
    icon:{
        width: 120,
        height: 120,
        marginBottom: -20,
        
    },

    textZagolovok:{
        color: 'white',
        
        fontFamily: 'LatoBold',
        fontSize: 20,
       textShadowColor: 'black',
        textShadowOffset:{width: 2.2, height: 2.2},
       marginBottom:50,
       justifyContent: 'center',
        alignItems: 'center',

    },
    opisaniePogoda:{
        backgroundColor: 'rgba(0, 73, 200, 0.55)',
        borderRadius: 20, 
        padding: 10,
        paddingTop: 40,
       
        flexDirection: 'column',
        justifyContent:'space-between',
        alignItems:'flex-start',
        

    },
    weatherDays:{
        flex: 1.5,
        borderTopLeftRadius: 73,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 73, 200, 0.45)',
    },

    weatherPerDays:{
       marginTop: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
      

    },
/* ПОГОДА 4 ДНЯ*/ 
    perDays:{
        backgroundColor: 'rgba(190, 190, 190, 0.8)',
        opacity: 0.8,
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 50, 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
        width: 130,
        height: 160,
        marginLeft: 20,
        marginRight: 20,
        
        
    },

    text5days:{
        color: 'white',
        fontSize: 20,
        opacity: 0.7,
        
        

    },
   

    iconDays:{
        width: 90,
        height: 90,
        
    },

    tempDays:{
        color: 'white',

       
        fontWeight: 'bold',
        fontSize: 22,
        textShadowColor: 'black',
        textShadowOffset:{width: 3, height: 3},
        
    },

    timeDays:{
        color: 'white',
      
        fontWeight: 'bold',
        fontSize: 20,
        textShadowColor: 'black',
        textShadowOffset:{width: 2, height: 2},
        backgroundColor: 'rgba(0, 90, 250, 0.66)',
        justifyContent: 'center',
        alignContent: 'center',
        padding:5,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 10,
    },

})