import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FoodMenu = () => {
  return (
    <View style={styles.container}>
      <Text>Food Menu Coming Soon</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
})

export default FoodMenu