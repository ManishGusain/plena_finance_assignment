import { StyleSheet, Text } from 'react-native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Screens } from '../../constants/Screens';
import HomeStackNavigator from '../stack/HomeNavigator';
import FavStackNavigator from '../stack/FavouriteNavigator';
import { CategoryIcon, FavIcon, HomeIcon, MoreIcon } from '../../svg';

const Tab = createBottomTabNavigator();

function DummyScreen() {
    return (
        <Text>Dummy Screen</Text>
    )
}

export default function BottomNavigator() {

    const screenOptions = {
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#B8BCCA',
        headerShown: false,
        tabBarStyle: {
            paddingVertical: 10,
            backgroundColor: '#F8F7FB',
            position: 'absolute',
            height: 55,
            borderColor: '#fff',
            borderTopWidth: 0,
            borderTopColor: 'transparent',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
        },
        tabBarLabelStyle: { paddingBottom: 3 },
    };

    return (
        <Tab.Navigator screenOptions={({ route }) => screenOptions}>
            <Tab.Screen
                name={Screens.HOME_STACK_NAV}
                component={HomeStackNavigator}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => <HomeIcon focused={focused} />,
                }}
            />
            <Tab.Screen
                name={Screens.CATEGORY_SCREEN}
                component={DummyScreen}
                options={{
                    tabBarLabel: 'Category',
                    tabBarIcon: ({ focused }) => <CategoryIcon focused={focused} />,
                }}
            />
            <Tab.Screen
                name={Screens.FAV_STACK_NAV}
                component={FavStackNavigator}
                options={{
                    tabBarLabel: 'Favourites',
                    tabBarIcon: ({ focused }) => <FavIcon focused={focused} />,
                }}
            />
            <Tab.Screen
                name={Screens.MORE_SCREEN}
                component={DummyScreen}
                options={{
                    tabBarLabel: 'More',
                    tabBarIcon: ({ focused }) => <MoreIcon focused={focused} />,
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
