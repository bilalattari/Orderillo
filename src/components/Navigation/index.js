
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { IntroScreen, LocationScreen, ItemScreen, DetailScreen, CategoryScreen } from "../";

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'IntroScreen'}
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="IntroScreen" component={IntroScreen} />
                <Stack.Screen name="LocationScreen" component={LocationScreen} />
                <Stack.Screen name="ItemScreen" component={ItemScreen} />
                <Stack.Screen name="DetailScreen" component={DetailScreen} />
                <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
               

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
