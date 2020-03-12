import React, { useState, useEffect } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { API } from '../constants/api'
import ChannelHeader from '../components/ChannelHeader'

const initialChannels = [{
  header: '',
  id: 'initialChannel',
  tease: ''
}]

const NewsFeedScreen = () => {
  const [newsData, setNewsData] = useState({})
  const [channels, setChannels] = useState(initialChannels)

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = () => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      setChannels(data.data[data.data.length - 1].items)
    })
    .catch(e => console.warn(e))
  }

  const displayNews = () => {
    return channels.map(channel => {
      return (
        <ChannelHeader
          header={channel.header}
          key={channel.id}
          backgroundImage={channel.tease}
        />
      )
    })
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {displayNews()}
      </ScrollView>
    </View>
  );
}

export default NewsFeedScreen

NewsFeedScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
  },
});
