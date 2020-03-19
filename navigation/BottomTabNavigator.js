import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import NewsFeedScreen from '../screens/NewsFeedScreen';
import colors from '../constants/Colors'

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'NewsFeed'

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({
    headerTitle: getHeaderTitle(route),
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {
      color: colors.text,
      fontFamily: 'oswald'
    }
  });

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        style: {backgroundColor: colors.primary},
        labelStyle: {color: colors.text, fontFamily: 'oswald'}
      }}
    >
      <BottomTab.Screen
        name="NewsFeed"
        component={NewsFeedScreen}
        options={{
          title: 'News Feed',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-paper" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'NewsFeed':
      return 'NEWS'
  }
}
