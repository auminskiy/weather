import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Image, StatusBar,  } from 'react-native';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-web';
import LottieView from 'lottie-react-native';

export default function Loading() {
    const [loaded] = useFonts({
        LatoBold: require('./assets/fonts/LatoBold.ttf'),
      });
      
      if (!loaded) {
        return null;
      } ;

     


  return (
    
   <View style={styles.container} >
     <StatusBar backgroundColor="white" barStyle="dark-content"/>
     
     <Text style={styles.textHead} >WeatherApp - прогноз погоды в вашем текущем местоположении</Text>
     
     
     
      
    
   <Text style={styles.text} >Определение местоположения</Text>
  
   </View>
   

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
   
  }, 
 
  loading:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingTop: 500,
  backgroundColor: 'red',
    resizeMode: 'contain' ,
  },
  text:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    color: 'red',
    letterSpacing: 3,
    fontFamily: 'LatoBold',
    fontSize: 30,
    textShadowColor: 'black',
    textShadowRadius: 2,
    textAlign: 'center',
    marginBottom: 100,
  },
  textHead:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    textAlign: 'center',
    color: 'black',
    marginTop: 100,
    fontSize: 15,
    textShadowColor: 'black',
    textShadowRadius: 1,
  },

});
