import React from 'react'
import { Text, ImageBackground, View, StyleSheet } from 'react-native'
import Layout from '../constants/Layout'

const ChannelHeader = (props) => {
  const { header, backgroundImage } = props

  const imageSource = backgroundImage
    ? {uri: backgroundImage}
    : require('../assets/images/filler.jpg')

  return (
    <>
      <ImageBackground
        source={imageSource}
        style={styles.image}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.headerText}>{header}</Text>
        </View>
      </ImageBackground>
    </>
  )
}

export default ChannelHeader

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 35,
    fontWeight: '800',
  },
  image: {
    width: Layout.window.width,
    height: 100
  }
});
