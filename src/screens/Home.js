import * as React from 'react';
import { View, StyleSheet, ImageBackground, FlatList } from 'react-native';
import HeaderContent from '../components/HomeHeaderContent';
import Section from '../components/Sections';
import categories from '../externalData/externalData';
import FoodItem from '../components/FoodItem';

const Home = () => {
    return (

        <View style={styles.container}>
            <ImageBackground source={require('../assets/Images/imgBG.jpg')} style={styles.backgroundImage}>

                {/* Header Content */}
                <HeaderContent />

                {/*Second/White Part of Home Page*/}
                <View style={styles.sampleFoodItemsArea}>
                    <View>
                        {/* Recommended*/}
                        <Section title="Recommeded" />

                        {/*Sample Food Items List */}
                        <FlatList
                            data={categories}
                            horizontal
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <FoodItem
                                        FoodItem={item}
                                    />
                                );
                            }}
                        />
                    </View>


                    <Section title="Near You" />


                </View>




            </ImageBackground >

        </View >


    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    backgroundImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },

    sampleFoodItemsArea: {
        backgroundColor: "white",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    }

})

export default Home;