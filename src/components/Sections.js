import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, SectionList } from "react-native";
import { sections } from "../externalData/externalData";

const Section = ({ onPress, title }) => {
    return (
        <View style={homeLowerSection.container}>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={{ fontSize: 18, fontWeight: "500", color: "black" }}>
                    {title}
                </Text>
            </View>
            <TouchableOpacity style={{ justifyContent: "center" }} onPress={onPress}>
                <Text style={{ fontSize: 15, color: "green" }}>See All</Text>
            </TouchableOpacity>
        </View>

    )
}

const homeLowerSection = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 25,
    },

    recommended: {
        fontSize: 20,
        fontWeight: "bold",
    },

});


export default Section