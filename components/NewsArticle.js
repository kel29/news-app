import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import * as WebBrowser from 'expo-web-browser';

const NewsArticle = (props) => {
  const { headline, tease, summary, url } = props.article

  const openArticle = () => {
    WebBrowser.openBrowserAsync(url)
  }

  return (
    <>
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={openArticle}>
          <Text style={styles.headline}>
            {headline}
          </Text>
        </TouchableOpacity>
        <Text>
          {summary}
        </Text>
        <Image source={{uri: tease}} style={styles.image} />
      </View>
    </>
  )
}

export default NewsArticle

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
  image: {
    height: 60,
    width: 60
  }
});
