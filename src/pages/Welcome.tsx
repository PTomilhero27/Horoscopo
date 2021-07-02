import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View
} from 'react-native'

import { useNavigation } from '@react-navigation/core';

import StartImg from '../assets/stars.png';
import Color from '../styles/Color';
import Fonts from '../styles/Fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('Home')
  }

  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function LoadStorageUserName() {
      const user = await AsyncStorage.getItem('@horoscopo:user');
      setUserName(user || '');
    }
    LoadStorageUserName()

  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>


        <Text style={styles.title}>
          Horóscopo
        </Text>

        <Image
          source={StartImg}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.subTitle}>
          Oi {userName}, confira o que os astros tem para dizer à você
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleStart}
        >
          <Text style={styles.buttonTitle}>Conferir</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 28,
    lineHeight: 38,
    fontFamily: Fonts.complement,

  },
  subTitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    fontFamily: Fonts.text,

  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 100,
    backgroundColor: Color.green,
  },

  buttonTitle: {
    fontSize: 18,
    color: Color.white,
    fontFamily: Fonts.text,
  },

  image: {
    height: Dimensions.get("window").width * 0.7,
  },

})