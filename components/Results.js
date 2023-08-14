import { StyleSheet, Modal, View, Text, Image, ScrollView } from "react-native";
// ADS
import AdComp_Banner from "./ads/AdComp_Banner";

export default function Results(props) {
  function formatTime(unixTime) {
    const date = new Date(unixTime * 1000);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    if (hour > 9 && minutes > 9) {
      return `${date.getHours()}:${date.getMinutes()}`;
    } else if (hour > 9 && minutes <= 9) {
      return `${date.getHours()}:0${date.getMinutes()}`;
    } else if (hour <= 9 && minutes > 9) {
      return `0${date.getHours()}:${date.getMinutes()}`;
    } else {
      return `0${date.getHours()}:0${date.getMinutes()}`;
    }
  }

  const weatherData = JSON.parse(props.data);

  // Main data
  const countryCode = weatherData.sys.country;
  const cityName = weatherData.name;
  const iconCode = weatherData.weather[0].icon;
  const temp = Math.round(weatherData.main.temp);
  const feelsLike = Math.round(weatherData.main.feels_like);
  const tempMax = Math.round(weatherData.main.temp_max);
  const tempMin = Math.round(weatherData.main.temp_min);
  const humidity = weatherData.main.humidity;
  const windSpeed = weatherData.wind.speed;
  const windDegree = weatherData.wind.deg;
  const sunrise = weatherData.sys.sunrise;
  const sunset = weatherData.sys.sunset;

  let mainImagePath;
  switch (iconCode) {
    case "01d":
      mainImagePath = require("../assets/images/weatherIcons/01d.png");
      break;
    case "01n":
      mainImagePath = require("../assets/images/weatherIcons/01n.png");
      break;
    case "02d":
      mainImagePath = require("../assets/images/weatherIcons/02d.png");
      break;
    case "02n":
      mainImagePath = require("../assets/images/weatherIcons/02n.png");
      break;
    case "03d":
      mainImagePath = require("../assets/images/weatherIcons/03d.png");
      break;
    case "03n":
      mainImagePath = require("../assets/images/weatherIcons/03n.png");
      break;
    case "04d":
      mainImagePath = require("../assets/images/weatherIcons/04d.png");
      break;
    case "04n":
      mainImagePath = require("../assets/images/weatherIcons/04n.png");
      break;
    case "09d":
      mainImagePath = require("../assets/images/weatherIcons/09d.png");
      break;
    case "09n":
      mainImagePath = require("../assets/images/weatherIcons/09n.png");
      break;
    case "10d":
      mainImagePath = require("../assets/images/weatherIcons/10d.png");
      break;
    case "10n":
      mainImagePath = require("../assets/images/weatherIcons/10n.png");
      break;
    case "11d":
      mainImagePath = require("../assets/images/weatherIcons/11d.png");
      break;
    case "11n":
      mainImagePath = require("../assets/images/weatherIcons/11n.png");
      break;
    case "13d":
      mainImagePath = require("../assets/images/weatherIcons/13d.png");
      break;
    case "13n":
      mainImagePath = require("../assets/images/weatherIcons/13n.png");
      break;
    case "50d":
      mainImagePath = require("../assets/images/weatherIcons/50d.png");
      break;
    case "50n":
      mainImagePath = require("../assets/images/weatherIcons/50n.png");
      break;
  }

  return (
    <Modal
      visible={props.visible}
      animationType="slide"
      onRequestClose={() => {
        props.toggleResults();
      }}
    >
      <View style={styles.rootContainer}>
        <ScrollView>
          <View style={styles.adBannerTop}>
            <AdComp_Banner />
          </View>
          <View style={styles.adBannerTop}>
            <AdComp_Banner />
          </View>
          <View style={styles.mainCont}>
            <View style={styles.mainContChild}>
              <View style={styles.headerCont}>
                <Text style={styles.headerText}>
                  {cityName}, {countryCode}
                </Text>
              </View>
              <View style={styles.dataCont}>
                <View style={styles.tempCont}>
                  <View style={styles.mainTempCont}>
                    <Text style={styles.mainTemp}>{temp}°</Text>
                    <View style={styles.minmaxCont}>
                      <Text style={styles.minMaxTemp}>
                        {tempMax}°/{tempMin}°
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tempSecondary}>
                    <Text style={styles.feelTemp}>feels like {feelsLike}°</Text>
                  </View>
                </View>
                <View style={styles.imageCont}>
                  <Image style={styles.mainImage} source={mainImagePath} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.secondaryCont}>
            <View style={styles.cardCont}>
              <Image
                style={styles.cardImage}
                source={require("../assets/images/results/humidity.png")}
              />
              <Text style={styles.secondaryText}>{humidity}%</Text>
            </View>
            <View style={styles.cardCont}>
              <Image
                style={styles.cardImage}
                source={require("../assets/images/results/wind.png")}
              />
              <Text style={styles.secondaryText}>{windSpeed}m/sec</Text>
            </View>
            <View style={styles.cardCont}>
              <Image
                style={styles.cardImage}
                source={require("../assets/images/results/sunrise.png")}
              />
              <Text style={styles.secondaryText}>{formatTime(sunrise)}</Text>
            </View>
            <View style={styles.lastChild}>
              <Image
                style={styles.cardImage}
                source={require("../assets/images/results/sunset.png")}
              />
              <Text style={styles.secondaryText}>{formatTime(sunset)}</Text>
            </View>
          </View>
          <View style={styles.adBanner}>
            <AdComp_Banner />
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#2B2D42",
  },

  mainCont: {
    flex: 3,
    backgroundColor: "#8D99AE",
    marginTop: 18,
    marginRight: 18,
    marginLeft: 18,
    borderRadius: 8,
    flexDirection: "column",
  },

  mainContChild: {
    margin: 15,
  },

  dataCont: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headerText: {
    fontSize: 30,
    paddingVertical: 5,
    paddingBottom: 15,
  },

  imageCont: {
    flex: 0,
  },

  tempCont: {
    alignContent: "space-between",
  },

  mainTempCont: {
    flexDirection: "row",
  },

  mainTemp: {
    fontSize: 80,
  },

  minMaxTemp: {
    height: 30,
    marginTop: "100%",
    fontSize: 18,
    fontWeight: "400",
  },

  feelTemp: {
    paddingTop: 10,
    fontSize: 18,
    fontWeight: "500",
  },

  secondaryCont: {
    flex: 5,
    backgroundColor: "#8D99AE",
    marginTop: 18,
    marginRight: 18,
    marginLeft: 18,
    marginBottom: 10,
    borderRadius: 8,
  },

  cardCont: {
    flexDirection: "row",
    paddingVertical: 21,
    marginHorizontal: 25,
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },

  lastChild: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 21,
    paddingHorizontal: 25,
  },

  secondaryText: {
    paddingTop: "10%",
    fontSize: 17,
  },

  cardImage: {
    width: 80,
    height: 80,
  },

  mainImage: {
    width: 150,
    height: 150,
  },
  adBannerTop: {
    marginVertical: 5,
  },

  adBanner: {
    marginBottom: 30,
  },
});
