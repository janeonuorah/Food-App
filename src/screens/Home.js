import * as React from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    FlatList,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HeaderContent from '../components/HomeHeaderContent';
import { SectionRecommended, SectionNearYou } from '../components/Sections';
import { categories, nearFoods } from '../externalData/externalData';
import { NearFoodItems, RecommendedFoodItems } from '../components/FoodItem';

const Home = () => {
    const toNavigate = useNavigation();

    const onNavigation = (item) => {
      toNavigate.navigate("Food Details", {
        foodItemDetails: item,
      });
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <ImageBackground source={require('../assets/Images/imgBG.jpg')} style={styles.backgroundImage}>

                    {/* Header Content */}
                    <HeaderContent />

                    {/*Second/White Part of Home Page*/}
                    <View style={styles.sampleFoodItemsArea}>

                        <View >
                            {/* Recommended*/}
                            <SectionRecommended title="Recommended" />

                            {/*Sample Food Items List */}
                            <FlatList
                                data={categories}
                                horizontal
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => {
                                    return (
                                        <RecommendedFoodItems
                                            FoodItem={item}
                                            onPressItem={() => onNavigation(item)}
                                        />
                                    );
                                }}
                            />
                        </View>

                        <View>
                            {/* Near You*/}
                            <SectionNearYou title="Near You" />

                            {/*Sample Food Items List */}
                            <FlatList
                                data={nearFoods}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => {
                                    return (
                                        <NearFoodItems
                                            FoodItem={item}
                                            onPressItem={() => onNavigation(item)}
                                        />
                                    );
                                }}
                            />

                        </View>


                    </View>

                </ImageBackground >

            </View >

        </ScrollView>
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
        borderTopRightRadius: 25,
        top: 20,
    },

})

export default Home;