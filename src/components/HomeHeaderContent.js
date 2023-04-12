import React, { useState } from 'react';
import { View, Platform, Image, Text, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HeaderContent = () => {
    const [search, setSearch] = useState("");

    return (
        <View style={homeHeaderStyles.container}>

            <SafeAreaView/>

            {/*Header Icons*/}
            <View style={homeHeaderStyles.headerIconsContainer}>

                <View style={{ flex: 1, justifyContent: "center" }}>
                    <Image
                        source={require("../assets/Icon/menu.png")}
                        style={{ width: 25, height: 25, tintColor: "white" }}
                    />
                </View>
                <View style={{ paddingRight: 25, justifyContent: "center" }}>
                    <Image
                        source={require("../assets/Icon/shopping-bag.png")}
                        style={{ width: 25, height: 25, tintColor: "white" }}
                    />
                </View>
                <View style={{ justifyContent: "center" }}>
                    <Image
                        source={require("../assets/Icon/bell.png")}
                        style={{ width: 25, height: 25, tintColor: "white" }}
                    />
                </View>
            </View>

            {/*Header text*/}
            <View style={homeHeaderStyles.headerTextContainer}>
                <Text style={homeHeaderStyles.headerText1}>
                    Delicious food ready to be delivered for you
                    <Image source={require("../assets/Icon/soup.png")} style={homeHeaderStyles.soupIcon}></Image>
                </Text>
            </View>

            {/*Header Search Bar */}
            <View style={homeHeaderStyles.searchBarContainer}>
                <Image source={require("../assets/Icon/search-interface-symbol.png")} style={homeHeaderStyles.searchBarSearchIcon}></Image>
                <TextInput style={homeHeaderStyles.searchBar}
                    placeholder={'Search food you will like to eat'} autoFocus={false}
                    onChangeText={setSearch}
                    value={search}
                    placeholderTextColor={"white"} />
            </View>

        </View >

    )
}

const homeHeaderStyles = StyleSheet.create({
    container: {
        flex: Platform.OS === "ios" ? 0.62 : 0.5,
    },

    headerIconsContainer: {
        marginHorizontal: 17,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    headerTextContainer: {
        marginTop: 35,
        marginLeft: 16,
    },

    headerText1: {
        color: "white",
        fontSize: 30,
        fontWeight: "600",
        lineHeight: 38,
    },

    soupIcon: {
        width: 35,
        height: 30,
    },

    searchBarContainer: {
        backgroundColor: null,
        height: 50,
        borderWidth: 0.5,
        borderColor: "white",
        marginTop: 20,
        flexDirection: "row",
        paddingHorizontal: 15,
        marginHorizontal: 30,
        borderRadius: 12,
    },

    searchBarSearchIcon: {
        width: 20,
        height: 20,
        justifyContent: "center",
        tintColor: "white",
        marginTop: 15,
    },

    searchBar: {
        marginLeft: 10,
        fontSize: 18
    }


})



export default HeaderContent
