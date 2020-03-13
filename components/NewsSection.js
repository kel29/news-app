import React from 'react'
import { View, StyleSheet } from 'react-native'

import ChannelHeader from '../components/ChannelHeader'
import NewsItem from './NewsItem'

const NewsSection = (props) => {
  const { header, tease, id, items } = props.data

  const parseItems = () => {
    return items.map(item => <NewsItem item={item} key={item.id} type={item.type} />)
  }

  return (
    <View style={styles.contentContainer}>
      <ChannelHeader
        header={header}
        backgroundImage={tease}
        key={id}
      />
      {parseItems()}
    </View>
  )
}

export default NewsSection

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 30
  },
});
