import React from 'react'
import { createButtonTabNavigatior } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import colors from './app/config/colors';
import PrincPag from './app/screens/PrincPag';

const Tab = createButtonTabNavigatior();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: colors.backTabs
            }}>
            <Tab.Screen options={{
                tabBarLabel: 'Home',
                tabBarIcon

            }}
                name="Home" component={PrincPag} />
            <Tab.Screen name="Home" component={PagPrinc} />
            <Tab.Screen name="Home" component={PagPrinc} />
        </Tab.Navigator>
    );
}

const Navigation = () => {
    return (
        <NavigationContainer independent={true}>
            <MyTabs />
        </NavigationContainer>
    )
}

export default Navigation