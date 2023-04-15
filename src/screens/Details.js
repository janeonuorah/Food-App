import { View, Text, StyleSheet, ScrollView, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const FoodDetails = ({ route }) => {
  const item = route.params.foodItemDetails;

  const [showFullDetails, setShowFullDetails] = useState();

  const onReadMorePress = () => {
    setShowFullDetails(!showFullDetails);
  }

  return (
    <View>

      <ScrollView>
        <View style={styles.container}>
          {/*Back Button and Cart Bag */}
          <View style={styles.BackButtonAndCartBagContainer}>
            <Image source={require('../assets/Icon/back-arrow.png')} style={styles.backButton}></Image>
            <Image source={require('../assets/Icon/shopping-bag.png')} style={styles.shoppingBag}></Image>
          </View>

          {/*Food Image/ First Part of Details Page */}
          <Image source={item.image} style={styles.FoodImage} />

          <View style={{ marginLeft: 10, marginRight: 10 }}>

            <View style={styles.NameAndOrderAmountContainer}>

              {/*Second Part of Details Page */}
              <View style={{ flexBasis: '70%' }}>
                <Text style={styles.FoodName}>{item.title}</Text>
              </View>

              {/*Add and Remove Buttons and Items for shopping */}
              <View style={styles.addToCartContainer}>
                <Pressable style={styles.removeButton}><Text style={{ color: '#00b4d8' }}>-</Text></Pressable>
                <Text style={styles.numberOrdered}>1</Text>
                <Pressable style={styles.addButton}><Text style={{ color: 'white' }}>+</Text></Pressable>
              </View>
            </View>

            {/*Third Part of Details Page containing distance, rating and approx. time */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>

              <View style={styles.perDistanceRatingAppoxTimeContainer}>
                <Image source={require('../assets/Icon/location.png')} style={styles.distanceRatingAppoxTimeIcon} />
                <Text style={styles.distanceRatingAppoxTimeText}>{item.distance}</Text>
              </View>

              <View style={styles.perDistanceRatingAppoxTimeContainer}>
                <Image source={require('../assets/Icon/details-star.png')} style={styles.distanceRatingAppoxTimeIcon} />
                <Text style={styles.distanceRatingAppoxTimeText}>{item.rating} Ratings</Text>
              </View>

              <View style={styles.perDistanceRatingAppoxTimeContainer}>
                <Image source={require('../assets/Icon/food-cover.png')} style={styles.distanceRatingAppoxTimeIcon} />
                <Text style={styles.distanceRatingAppoxTimeText}>{item.approximateTime}</Text>
              </View>

            </View>

            {/*Food Item Description */}
            <Text style={{ marginVertical: 20, fontSize: 20, fontWeight: 'bold' }}>Description</Text>

            <View>
              {/*Ternary condition to show short food details */}
              <Text style={{ lineHeight: 25, fontSize: 17, color: 'grey', fontWeight: '400' }}
                numberOfLines={showFullDetails ? undefined : 3}
                ellipsizeMode='clip'
              >
                {showFullDetails ? item.description : item.description}
              </Text>

              {/*Conditions to show more or less of food details */}
              {showFullDetails ? (
                <TouchableOpacity onPress={onReadMorePress}>
                  <Text style={{ color: '#00b4d8', fontSize: 15, fontWeight: '600' }}>Show less...</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={onReadMorePress}>
                  <Text style={{ color: '#00b4d8', fontSize: 15, fontWeight: '600' }}>Read more...</Text>
                </TouchableOpacity>
              )}
            </View>

            <Image source={require('../assets/Images/map.jpeg')} style={{ width: '100%', height: 300, resizeMode: 'cover', marginVertical: 20 }} />

          </View>

        </View>

      </ScrollView >

      <View style={styles.lowerButtonsContainer}>
        <TouchableOpacity style={{backgroundColor:'white', borderWidth: 2, borderRadius: 20, borderColor: '#00b4d8'}}><Text style={[styles.buttonsChartandAddCart, styles.chatButton]}>Chat</Text></TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#00b4d8', borderWidth: 2, borderRadius: 20, borderColor: '#00b4d8'}}><Text style={[styles.buttonsChartandAddCart, styles.addCartButton]}>Add Cart</Text></TouchableOpacity>
      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8
  },

  FoodImage: {
    width: 400,
    height: 400,
    borderRadius: 30,
  },

  BackButtonAndCartBagContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 70,
    zIndex: 1,
    marginLeft: 20,
    marginRight: 20
  },

  backButton: {
    height: 30,
    width: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10
  },

  shoppingBag: {
    height: 30,
    width: 30,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 5
  },

  NameAndOrderAmountContainer: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  FoodName: {
    fontSize: 23,
    fontWeight: 'bold',
  },

  addToCartContainer: {
    flexDirection: 'row',
    backgroundColor: '#e2e2e2',
    justifyContent: 'space-between',
    width: 80,
    height: 40,
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
    flexBasis: '30%',
    marginTop: 10
  },

  numberOrdered: {
    fontWeight: 'bold',
    fontSize: 20
  },

  addButton: {
    backgroundColor: '#00b4d8',
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 10,
  },

  removeButton: {
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 10,
  },

  perDistanceRatingAppoxTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  distanceRatingAppoxTimeIcon: {
    flexDirection: 'row',
    height: 20,
    width: 20
  },

  distanceRatingAppoxTimeText: {
    fontSize: 15,
    color: 'grey',
    fontWeight: '500'
  },

  lowerButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: -80,
    paddingBottom: 30,
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: 'white',
  },

  buttonsChartandAddCart: {
    marginLeft: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },

  chatButton: {
    color: '#00b4d8',
    marginRight: 20
  },

  addCartButton: {
   color: 'white',
   marginRight: 20
  }
})

export default FoodDetails