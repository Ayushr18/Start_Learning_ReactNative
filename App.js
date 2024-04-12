import React, {useState, useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./SRC/components/Tabs";
import {ActivityIndicator, View, StyleSheet} from 'react-native'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from "@env"
import { useGetWeather } from "./SRC/hooks/useGetWeather";
import ErrorItem from "./SRC/components/ErrorItem";

const App = () => {

  const [loading, error, weather] = useGetWeather()

  if(weather && weather.list && !loading) {
    return (
      <NavigationContainer>
          <Tabs weather={weather}/>
      </NavigationContainer>
    );
  }

  
    return (
      <View style={styles.container}>
        {error ? (
          <ErrorItem/>
        ) : (
          <ActivityIndicator size={'large'} color={'blue'}/>
        )}
      </View>
    )
  

};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})



export default App;
