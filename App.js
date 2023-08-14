import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Button,
  Text,
  ToastAndroid,
} from "react-native";
import Results from "./components/Results";
import { useState } from "react";
import "expo-dev-client";
// ADS
import AdComp_Banner from "./components/ads/AdComp_Banner";

export default function App() {
  const [resultsVisible, setResultsVisible] = useState(false);
  const [data, setData] = useState();
  const [query, setQuery] = useState("");

  const apiKey = "f3f79b864b0c4957c6f6eb1b595af2b1";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`;

  const fetchData = async () => {
    if (query !== "") {
      const response = await fetch(url);
      const weatherData = await response.json();
      if (weatherData.cod === 200) {
        setData(JSON.stringify(weatherData));
        setResultsVisible(true);
      } else {
        ToastAndroid.show(`${weatherData.message}`, ToastAndroid.LONG);
      }
    } else {
      ToastAndroid.show("Please enter a city name!", ToastAndroid.SHORT);
    }
  };

  function toggleResults() {
    setResultsVisible((visible) => !visible);
  }

  return (
    <View style={styles.mainContainer}>
      <StatusBar style="light" />
      <View style={styles.bannerAd}>
        <AdComp_Banner />
      </View>
      {resultsVisible && (
        <Results
          data={data}
          toggleResults={toggleResults}
          visible={resultsVisible}
        />
      )}
      <View style={styles.centerContainer}>
        <Image
          source={require("./assets/images/logo.webp")}
          style={styles.logo}
        />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter a city:"
            placeholderTextColor="#EDF2F4"
            onChangeText={(enteredText) => setQuery(enteredText)}
            style={styles.textInput}
          />
          <Button title="get" color="#7373cc" onPress={fetchData} />
        </View>
      </View>
      <View style={styles.bottomCont}>
        <Text style={styles.about}>Created by Ali Valiev</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2B2D42",
  },

  centerContainer: {
    flexDirection: "column",
    alignItems: "center",
    height: "50%",
    margin: 10,
  },

  logo: {
    width: 345,
    height: 245,
    marginBottom: 15,
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#EDF2F4",
    borderRadius: 5,
    color: "#EDF2F4",
    padding: 5,
    width: "85%",
    marginRight: "3%",
  },

  bottomCont: {
    position: "absolute",
    bottom: 0,
    padding: 10,
  },

  about: {
    color: "#EDF2F4",
  },

  bannerAd: {
    position: "absolute",
    top: 60,
  },
});
