import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { API } from '../constants/api'
import NewsSection from '../components/NewsSection'

const NewsFeedScreen = () => {
  const [newsData, setNewsData] = useState([])

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = () => {
    fetch(API)
    .then(res => res.json())
    .then(data => setNewsData(data.data))
    .catch(e => console.warn(e))
  }

  const displayNews = () => {
    return newsData.map(newsItem => {
      if (newsItem.type === "Section" && newsItem.showMore) {
        return <NewsSection data={newsItem} key={newsItem.id} />
      }
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
