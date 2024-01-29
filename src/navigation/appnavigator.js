import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from "../screens/home/home";
import Info from "../screens/info/info";
import HomeDetail from '../screens/home/detail';


const Stack = createNativeStackNavigator();
const bottomTabNavigator = createBottomTabNavigator();


const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="home"
            screenOptions={{
                headerShown: false
            }}  >
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="homedetail" component={HomeDetail} />
        </Stack.Navigator>
    )
}

const InfoStack = () => {
    return (
        <Stack.Navigator initialRouteName="info"
            screenOptions={{
                headerShown: false
            }}  >
                   <Stack.Screen name="info" component={Info} />
        </Stack.Navigator>
    )
}


const BottomTabStack = () => (
    <bottomTabNavigator.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                // focused = { focused }
                let iconName;
                if (route.name === "Home") {
                    return (
                        focused ?
                            <View>
                                <Image source={require('../assets/images/home2.png')}  />
                            </View>
                            :
                            <View>
                                <Image source={require('../assets/images/home1.png')}  />
                            </View>
                    );
                }
                else if (route.name === "Info") {
                    return (
                        focused ?
                            <View>
                                <Image source={require('../assets/images/search2.png')}  />
                            </View>
                            :
                            <View>
                                <Image source={require('../assets/images/search1.png')}  />
                            </View>
                    );
                }
              
            },
            tabBarActiveTintColor: '#14CDC8',
            tabBarInactiveTintColor: '#ccc',

        })}
    >
        <bottomTabNavigator.Screen
            options={({ route }) => ({
                tabBarStyle: ((route) => {
                    const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                    console.log(routeName)
                    if (routeName === 'homedetail') {
                        return { display: "none" }
                    }
                    return
                })(route),
                tabBarShowLabel: false
            })}
            name="Home"
            component={HomeStack} />
        <bottomTabNavigator.Screen
            options={({ route }) => ({
                tabBarStyle: ((route) => {
                    const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                    console.log(routeName)
                    return
                })(route),
                tabBarShowLabel: false
            })}
            name="Info" component={InfoStack} />

    </bottomTabNavigator.Navigator>

);

const NavContainer = () => {

    return (
        <NavigationContainer>
             <BottomTabStack />
        </NavigationContainer>
    );
};

export default NavContainer;



