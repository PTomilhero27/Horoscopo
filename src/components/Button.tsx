import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,

} from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';


import Color from '../styles/Color';
import Fonts from '../styles/Fonts';

interface ButtonProps extends RectButtonProps {
  title: string
}

export function Button({title, ...rest} : ButtonProps) {

  return (

    <RectButton
      style={styles.button}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.buttonTitle}>{title}</Text>
    </RectButton>

  )
}



const styles = StyleSheet.create({

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 50,
    width: 150,
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