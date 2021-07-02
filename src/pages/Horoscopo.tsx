import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import { EvilIcons } from '@expo/vector-icons';

import { useRoute } from '@react-navigation/core'
import wallpaperImg from '../assets/wallpaper.png'
import Fonts from '../styles/Fonts';
import Color from '../styles/Color';
import { Photos } from '../components/Photos'
import { ScrollView } from 'react-native';
import { Colors } from '../components/Colors';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface Params {
  signo: {
    sign: string,
    description: string
  }
}

export function Horoscopo() {

  const navigation = useNavigation();
  const Route = useRoute()
  const { signo } = Route.params as Params

  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function  LoadStorageUserName() {
    const user = await AsyncStorage.getItem('@horoscopo:user');
    setUserName(user || '');
    }
    LoadStorageUserName()

  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Colors sing={signo.sign} />
      <ScrollView>
        <TouchableOpacity
          style={styles.header}
          onPress={() => {
            navigation.navigate("Home")
          }}
        >
          <EvilIcons
            name="close"
            size={35}
            color="black"
          />
        </TouchableOpacity>

        <View style={styles.Content}>

          <Photos
            sing={signo.sign}
          />

          <Text style={styles.title}>{signo.sign}</Text>

          <Text style={styles.date}>08/06/2021</Text>

          <Text style={styles.description}>
            ola {userName}, {signo.description}
          </Text>

          <Image source={wallpaperImg} />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Home")
            }}
          >
            <Text style={styles.buttonText}>Veja o horóscopo de outros signos!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'flex-end',
    padding: 20,
  },
  Content: {

    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 80,
    height: 110,
  },
  description: {
    maxWidth: 300,
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 25,
    marginVertical: 20,
    color: Color.text,
  },
  title: {
    fontSize: 30,
    fontFamily: Fonts.heading,
    color: Color.text,
    marginTop: 20,
  },
  date: {
    fontSize: 18,
    color: Color.text,
    fontFamily: Fonts.text,
  },
  button: {
    width: '90%',
    height: 40,
    borderRadius: 20,
    margin: 20,

    alignItems: 'center',
    justifyContent: 'center',


    backgroundColor: Color.button,
  },

  buttonText: {
    color: Color.white,
    fontFamily: Fonts.heading,

  }
})