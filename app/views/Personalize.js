import React from "react"
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  DatePickerIOS,
  TouchableOpacity,
  Button
} from "react-native"
import Slider from "react-native-slider"
import DateTimePicker from "react-native-modal-datetime-picker"

export default class Personalize extends React.Component {
  state = {
    fitnessLevel: 1,
    birthday: new Date(),
    isDateTimePickerVisible: false,
    weight: 100,
    height: 60
  }

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

  handleDatePicked = (date) => {
    this.setState({ date: date.toString(), birthday: new Date(date) })
    this.hideDateTimePicker()
  }

  setWeight = (weight) => {
    this.setState({ weight: weight })
  }

  setHeight = (height) => {
    this.setState({ height: height })
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Fitness Level Title */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ textAlign: "left" }}>Fitness Level</Text>
          <Text style={{ textAlign: "right" }}>
            Level: {this.state.fitnessLevel}
          </Text>
        </View>
        {/* Fitness Level Slider Bar */}
        <Slider
          value={this.state.fitnessLevel}
          onValueChange={(fitnessLevel) => this.setState({ fitnessLevel })}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ textAlign: "left" }}>Little</Text>
          <Text style={{ textAlign: "right" }}>Lots</Text>
        </View>

        {/* Birthday Collector */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: "10%"
          }}
        >
          <Text style={{ textAlign: "left" }}>Birthday</Text>
          <Text style={{ textAlign: "right" }}>
            Date: {this.state.birthday.getMonth()}-
            {this.state.birthday.getDate()}-{this.state.birthday.getFullYear()}
          </Text>
        </View>
        <View style={{}}>
          <Button
            onPress={this.showDateTimePicker}
            title="Choose Your Birthday"
          />
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
          />
        </View>

        {/* Weight Collector */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: "10%"
          }}
        >
          <Text style={{ textAlign: "left" }}>Weight</Text>
          <Text style={{ textAlign: "right" }}>
            Value: {this.state.weight} lbs{" "}
          </Text>
        </View>
        <TextInput
          style={{
            alignSelf: "center",
            backgroundColor: "lightblue",
            padding: "4%"
          }}
          placeholder="Change Weight"
          value={this.state.weight}
          onSubmitEditing={
            (event) => this.setWeight(event.nativeEvent.text) // Note this complicated syntax.
          }
        />

        {/* Weight Collector */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: "10%"
          }}
        >
          <Text style={{ textAlign: "left" }}>Height</Text>
          <Text style={{ textAlign: "right" }}>
            Value: {this.state.height} inches{" "}
          </Text>
        </View>
        <TextInput
          style={{
            alignSelf: "center",
            backgroundColor: "lightblue",
            padding: "4%"
          }}
          placeholder="Change Height"
          value={this.state.height}
          onSubmitEditing={
            (event) => this.setHeight(event.nativeEvent.text) // Note this complicated syntax.
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
  }
})
