import React from "react";
import {View, StyleSheet} from 'react-native'
import CurrentWeather from "./SRC/screens/CurrentWeather";
import UpcomingWeather from "./SRC/screens/UpcomingWeather";
import City from "./SRC/screens/City";
const App = () => {
  return(
    <View style={styles.container}>
        <City/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:  1
    }
})
export default App;