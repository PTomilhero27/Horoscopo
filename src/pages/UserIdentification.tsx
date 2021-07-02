
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Image
} from 'react-native';

import { Button } from '../components/Button';
import Color from '../styles/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function UserIdentification() {


  const navigation = useNavigation();

  async function handleSubmit() {

    if (!name) {
      return Alert.alert("Como posso chamar você ? 😢")
    }
    try {
      await AsyncStorage.setItem('@horoscopo:user', name);
      navigation.navigate('Welcome')
    } catch {
      Alert.alert("Não foi possível salvar seu nome 😢")
    }

  }

  const [maskedPhoneValue, setMaskedPhoneValue] = useState("");

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState<string>()

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!name)
  }
  function handleInputFocus() {
    setIsFocused(true)
  }


  function handleTextChange(text: string) {
    setMaskedPhoneValue(text);
    setIsFilled(!!text);
    setName(text)
  }


  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
        >
          <View >
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.emoji}>
                  {isFilled ? '😄' : '😃'}
                </Text>

                <Text style={styles.title}>
                  Como posso te chamar ?
                </Text>
              </View>

              <TextInput

                style={styles.input}
                placeholder="Digite Seu nome"
                value={maskedPhoneValue}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={(text) => handleTextChange(text)}
              />


              <View style={styles.footer}>
                <Button
                  title="Confirmar"
                  onPress={handleSubmit}

                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center'
  },
  emoji: {
    fontSize: 44,
  },
  input: {
    borderRadius: 9,
    width: '100%',
    backgroundColor: '#fafafa',
    paddingHorizontal: 20,
    fontSize: 18,
    marginHorizontal: 25,
    height: 55,

  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: Color.text,
    lineHeight: 32,
    marginTop: 20
  },
  footer: {
    marginTop: 40,
  },
})