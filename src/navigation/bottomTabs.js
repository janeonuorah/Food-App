//bottom tab 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View } from 'react-native';
import React from 'react';

//screens
import Home from '../screens/Home';
import foodMenu from '../screens/FoodMenu';
import searchScreen from '../screens/Search';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: true, tabBarShowLabel: false }}
            >
                <Tab.Screen name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: () => {
                            return (
                                <View
                                    style={{
                                        paddingTop: 12,
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Image
                                        source={require("../assets/Icon/home.png")}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            tintColor: "grey",
                                        }}
                                    />
                                </View>
                            );
                        }
                    }
                    }
                />
               
               <Tab.Screen name="Menu"
                    component={foodMenu}
                    options={{
                        headerShown: false,
                        tabBarIcon: () => {
                            return (
                                <View
                                    style={{
                                        paddingTop: 12,
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Image
                                        source={require("../assets/Icon/menu.png")}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            tintColor: "grey",
                                        }}
                                    />
                                </View>
                            );
                        }
                    }
                    }
                />
                <Tab.Screen name="Search"
                    component={searchScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: () => {
                            return (
                                <View
                                    style={{
                                        paddingTop: 12,
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Image
                                        source={require("../assets/Icon/search-interface-symbol.png")}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            tintColor: "grey",
                                        }}
                                    />
                                </View>
                            );
                        }
                    }
                    }
                />
                <Tab.Screen name="Profile"
                    component={Profile}
                    options={{
                        headerShown: false,
                        tabBarIcon: () => {
                            return (
                                <View
                                    style={{
                                        paddingTop: 12,
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Image
                                        source={require("../assets/Icon/user.png")}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            tintColor: "grey",
                                        }}
                                    />
                                </View>
                            );
                        }
                    }
                    }
                />
            </Tab.Navigator>
    )

}


export default BottomTabs;