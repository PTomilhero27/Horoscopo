import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Color from '../styles/Color';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Fonts from '../styles/Fonts';
import { Signos } from '../components/Signos';
import api from '../services/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { Menu } from '../components/Menu';
import { useNavigation } from '@react-navigation/core';


type SignosProps = {
  horoscopes: [
    sign: string,
    description: string
  ]

}

export function Home() {
  const [signos, setSignos] = useState<SignosProps>()

  const navigation = useNavigation();

  useEffect(() => {
    async function fetchSignos() {
      const { data } = await api.get('test?dt=2021-07-03')
      setSignos(data.result[0].horoscopes)
    }

    fetchSignos()
  }, [])

  function handleSignoSelect(signo: SignosProps) {
    navigation.navigate("Horoscopo", { signo })
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.ballHeader}>

        </View>
        <View style={[styles.ballHeader, {
          left: 0,
          top: 20,
          borderRadius: 100,

          width: 150,
          height: 60,
        }]}>

        </View>
        <View style={[styles.ballHeader, {
          left: 220,
          top: 0,
          borderRadius: 100,

          width: 150,
          height: 80,
        }]}>

        </View>


        <View style={styles.headerLeft}>

          <TouchableOpacity onPress={() => {
            navigation.navigate("Welcome")
          }}>
            <AntDesign
              name="arrowleft"
              size={24}
              color="black"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Horóscopo</Text>
        </View>
        <Entypo
          name="dots-three-vertical"
          size={20}
          color="black"
        />
      </View>

      <View style={styles.content}>
        <Text
          style={
            { marginVertical: 20, fontSize: 10, fontFamily: Fonts.text }}
        >
          Escolha um signo e descubra o horóscopo do dia!
        </Text>

        <View style={styles.sings}>
          <FlatList

            data={signos}
            keyExtractor={(item) => item.sign}
            renderItem={({ item }) => (
              <Signos
                nome={item.sign}
                sing={item.sign}
                onPress={() => handleSignoSelect(item)}
              />

            )}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            numColumns={3}
          />
        </View>

      </View>

      <Menu />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.background,
    flex: 1,
  },
  header: {
    width: '100%',
    height: 80,

    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 30,
    backgroundColor: Color.header,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 15,
    fontFamily: Fonts.text,
  },

  content: {
    paddingHorizontal: 25,
  },
  enviromentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32
  },
  sings: {

    justifyContent: 'space-between',
  },
  ballHeader: {
    width: 230,
    height: 70,
    left: 80,
    top: 10,
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
    backgroundColor: Color.circle,
    position: 'absolute',
    opacity: .5
  }
})