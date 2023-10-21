import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feed, CreatePost } from './screens';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const BottonTabNavigator = () => { 
    
    return (
      <Tab.Navigator

    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Feed') { 
            iconName = focused
            ? 'book'
            :'book-outline';

        } else if (route.name=== 'CriarPost') { 
            iconName = focused ? 'create': 'create-outline'; 
        }

     return <Ionicons name={iconName} size={size} color={color} />
    },
})}

tabBarOptions={{

   activeTintColor: 'tomato', 
   inactiveTintColor: 'gray',
}} >

      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Create Post" component={CreatePost} />
    </Tab.Navigator>
  );
};

export default TabNavigator;