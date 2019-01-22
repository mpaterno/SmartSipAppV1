/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react"
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Image
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import CustomText from "../components/CustomText"
import { AnimatedCircularProgress } from "react-native-circular-progress"

import { Provider, Subscribe, Container } from "unstated"
import {
  TestSubscriber,
  DisplayBottleCapacity,
  DisplayDailyGoal,
  DisplayDailyProgress,
  DisplayRemainingBottleCapacity
} from "./Values"

type CounterState = {
  count: number
}

// Logo Implementation
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

type Props = {}
export default class Home extends Component<Props> {
  // For some reason, because it's not in the render, navigation is not part of this.props.
  // So basically, I'm passing in navigation into the header.
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

  render() {
    return (
      <View style={styles.container}>
        <View>
          {/* Top Bar, background white, TODO: Remove top bar border */}
          <Provider>
            <DisplayDailyProgress />
          </Provider>
          {/* Water Bottle Large Display */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: "5%",
              paddingTop: "15%"
            }}
          >
            <AnimatedCircularProgress
              size={200}
              width={3}
              fill={
                90
                // TODO: Figure out how to return value.
                // <Provider>
                //   <DisplayRemainingBottleCapacity />
                // </Provider>
              }
              tintColor="#5cacff"
              backgroundColor="#dbedff"
            >
              {(fill) => (
                <View style={{ alignItems: "center" }}>
                  <CustomText
                    style={{
                      fontSize: 40,
                      fontWeight: "bold",
                      color: "#5cacff"
                    }}
                  >
                    90%
                  </CustomText>
                  <CustomText style={{ fontSize: 24, color: "#5cacff" }}>
                    Filled.
                  </CustomText>
                </View>
              )}
            </AnimatedCircularProgress>
          </View>
          {/* Making Columns */}
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            {/* Dashboard box 1 */}
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Personalize")}
              underlayColor="white"
            >
              <View style={styles.dashboardContainer}>
                <CustomText style={{}}>Today's Goal.</CustomText>
                <Provider>
                  <DisplayDailyGoal style={styles.dashboardH1} />
                </Provider>
                <CustomText style={styles.lightGrey}>
                  Adjust Drinking Goals
                </CustomText>
              </View>
            </TouchableOpacity>
            <View style={{ width: "45%" }}>
              {/* Dashboard box 2 */}
              <View style={styles.dashboardContainer}>
                <CustomText style={styles.dashboardH1}>+1.3 oz</CustomText>
                <CustomText style={styles.lightGrey}>
                  Above ToD Average
                </CustomText>
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Locate")}
                underlayColor="white"
              >
                {/* Dashboard box 3 */}
                <View style={styles.dashboardContainer}>
                  <CustomText style={{ fontSize: 18, fontWeight: "bold" }}>
                    Find Bottle
                  </CustomText>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Button
          title="Test button"
          onPress={() => this.props.navigation.navigate("Locate")}
        />

        {/* A demonstrating of mutating numbers across different views. */}
        <Provider>
          <TestSubscriber />
        </Provider>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#e8f7ff"
  },
  dashboardSideContainer: {
    width: "45%",
    margin: 5
  },
  dashboardContainer: {
    borderRadius: 20,
    margin: 5,
    backgroundColor: "white",
    padding: 15
  },
  dashboardH1: {
    fontSize: 30,
    fontWeight: "bold"
  },
  lightGrey: {
    color: "#202020"
  }
})
