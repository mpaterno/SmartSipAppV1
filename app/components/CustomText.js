// import PropTypes from "prop-types"
import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"

class CustomText extends Component {
  render() {
    return (
      // Note the bracket notation for styles allowed for cascading styles from two different sources.
      <Text style={[this.props.style, FontStyles.CustomFont]}>
        {/* this.props.children refers to the text between the two brackets. */}
        {this.props.children}
      </Text>
    )
  }
}
export default CustomText

const FontStyles = StyleSheet.create({
  CustomFont: {
    fontFamily: "Avenir"
  }
})
