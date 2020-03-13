import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import * as WebBrowser from 'expo-web-browser';

const NewsItem = (props) => {
  const { headline, tease, summary, url } = props.item
  const { type } = props

  const openItem = () => {
    WebBrowser.openBrowserAsync(url)
  }

  return (
    <>
      <View style={styles.contentContainer}>
        {type !== 'article' && <Image source={{uri: tease}} style={styles.largeImage} />}
        <TouchableOpacity onPress={openItem}>
          <Text style={styles.headline}>
            {headline}
          </Text>
        </TouchableOpacity>
        <Text>
          {summary}
        </Text>
      </View>
    </>
  )
}

export default NewsItem

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  headline: {
    fontSize: 20,
    fontWeight: '600'
  },
  largeImage: {
    flex: 1,
    height: 200,
    width: '100%'
  },
  image: {
    height: 60,
    width: 60
  }
});
