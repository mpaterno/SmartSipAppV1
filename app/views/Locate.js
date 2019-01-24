import React, { Component } from "react"
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Image,
  Animated
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import CustomText from "../components/CustomText"

import { Provider, Subscribe, Container } from "unstated"

import MapView from "react-native-maps"

//LogoImplementation
class LogoTitle extends Component {
  render() {
    return (
      <Image
        source={require("../assets/Smart-Sip-Logo.png")}
        style={{ width: 50, height: 40 }}
      />
    )
  }
}

class Locate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movementValue: new Animated.Value(150), // Initi
      containerHeader: "Press to see previous locations."
    }

    this.previousLocationsHidden = true
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button
          onPress={() => navigation.navigate("Values")}
          title="Edit"
          color="#777777"
          style={{ paddingRight: "10%" }}
        />
      )
    }
  }

  // Location Toggler
  toggleLocationContainer() {
    this.setState({
      containerHeader: this.previousLocationsHidden
        ? "Press to hide previous locations"
        : "Press to see previous locations"
    })

    var toValue = 150

    if (this.previousLocationsHidden) {
      toValue = 0
    }

    Animated.spring(this.state.movementValue, {
      toValue: toValue,
      velocity: 3,
      tension: 2,
      friction: 8
    }).start()

    this.previousLocationsHidden = !this.previousLocationsHidden
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={{ position: "relative", height: "100%" }}>
          <MapView
            style={{
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              position: "absolute"
            }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          />
        </View>
        <Animated.View
          style={[
            styles.locationContainer,
            { transform: [{ translateY: this.state.movementValue }] }
          ]}
        >
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              this.toggleLocationContainer()
            }}
          >
            <Text style={styles.buttonText}>{this.state.containerHeader}</Text>
          </TouchableHighlight>
          <Text style={styles.locations}>613 Gayley Avenue</Text>
          <Text style={styles.locations}>613 Gayley Avenue</Text>
          <Text style={styles.locations}>613 Gayley Avenue</Text>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonText: {
    padding: 20
  },

  locations: {
    paddingBottom: 15
  },

  locationContainer: {
    alignItems: "center",
    bottom: 210,
    backgroundColor: "lightblue",
    height: "40%"
  },
  mainContainer: {
    backgroundColor: "lightgray",
    height: "100%",
    justifyContent: "space-between"
    // flexDirection: "row"
  }
})

export default Locate
