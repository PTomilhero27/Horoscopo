import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Fonts from '../styles/Fonts';

export function Menu() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.center}>
        <Ionicons
          name="home-outline"
          size={35}
          color="black"
        />
        <Text >Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.center}>
        <MaterialCommunityIcons
          name="cards-outline"
          size={35}
          color="black"
        />
        <Text >Cartela</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.center}>
        <Ionicons
          name="camera-outline"
          size={35}
          color="black"
        />
        <Text >Color Match</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.center}>
        <MaterialCommunityIcons
          name="tshirt-crew-outline"
          size={35}
          color="black"
        />
        <Text>Closet</Text>

      </TouchableOpacity>


      <TouchableOpacity style={styles.center}>
        <MaterialCommunityIcons
          name="shopping-outline"
          size={35}
          color="black"
        />
        <Text>Descontos</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 50,

    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  center: {
    alignItems: 'center',
    fontSize: 16,
    lineHeight: 20,
    fontFamily: Fonts.text

  }
})
