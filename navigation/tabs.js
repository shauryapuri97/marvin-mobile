import React from 'react';
import {
    View,
    Image,
    Touchable
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';

import { Home } from '../screens';

import { COLORS, icons } from '../constants'

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    backgroundColor: 'transparent',
                    borderTopWidth: 0,
                    elevation: 0
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.cutlery}
                            resizeMeode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Like"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.like}
                            resizeMeode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="User"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.user}
                            resizeMeode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;