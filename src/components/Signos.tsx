import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import aries from '../assets/icon/aries.png';
import aquario from '../assets/icon/aquario.png';
import cancer from '../assets/icon/cancer.png';
import capricornio from '../assets/icon/capricornio.png';
import escorpiao from '../assets/icon/escorpiao.png';
import gemeos from '../assets/icon/gemeos.png';
import leao from '../assets/icon/leao.png';
import libra from '../assets/icon/libra.png';
import peixes from '../assets/icon/peixes.png';
import sagitario from '../assets/icon/sagitario.png';
import virgem from '../assets/icon/virgem.png';
import touro from '../assets/icon/touro.png';
import Color from '../styles/Color';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';



interface SignosProps extends RectButtonProps {
 
  nome: string,
  sing: string
  

}

export function Signos({ nome,  sing, ...rest }: SignosProps) {
  return (
    <RectButton style={styles.container} {...rest}>


      {sing === "Áries" ?
        <View style={{
          width: 90,
          height: 90,
          borderRadius: 1000,
          marginHorizontal: 8,

          backgroundColor: Color.aries,
          alignItems: 'center',
          justifyContent: 'center',
        }} >
          <Image
            source={aries}
            resizeMode="contain"
          />
        </View>
        : sing === "Câncer" ?
          <View style={{
            width: 90,
            height: 90,
            borderRadius: 1000,
            marginHorizontal: 8,

            backgroundColor: Color.cancer,
            alignItems: 'center',
            justifyContent: 'center',
          }} >
            <Image
              source={cancer}
              resizeMode="contain"
            />
          </View>
          : sing === 'Capricórnio' ?
            <View style={{
              width: 90,
              height: 90,
              borderRadius: 1000,
              marginHorizontal: 8,

              backgroundColor: Color.capricornio,
              alignItems: 'center',
              justifyContent: 'center',
            }} >
              <Image
                source={capricornio}
                resizeMode="contain"
              />
            </View>
            : sing === "Escorpião" ?
              <View style={{
                width: 90,
                height: 90,
                borderRadius: 1000,
                marginHorizontal: 8,

                backgroundColor: Color.escorpiao,
                alignItems: 'center',
                justifyContent: 'center',
              }} >
                <Image
                  source={escorpiao}
                  resizeMode="contain"
                />
              </View>
              : sing === "Gêmeos" ?
                <View style={{
                  width: 90,
                  height: 90,
                  borderRadius: 1000,
                  marginHorizontal: 8,

                  backgroundColor: Color.gemeos,
                  alignItems: 'center',
                  justifyContent: 'center',
                }} >
                  <Image
                    source={gemeos}
                    resizeMode="contain"
                  />
                </View>
                : sing === "Leão" ?
                  <View style={{
                    width: 90,
                    height: 90,
                    borderRadius: 1000,
                    marginHorizontal: 8,

                    backgroundColor: Color.leao,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }} >
                    <Image
                      source={leao}
                      resizeMode="contain"
                    />
                  </View>
                  : sing === "Libra" ?
                    <View style={{
                      width: 90,
                      height: 90,
                      borderRadius: 1000,
                      marginHorizontal: 8,

                      backgroundColor: Color.libra,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }} >
                      <Image
                        source={libra}
                        resizeMode="contain"
                      />
                    </View>
                    : sing === "Peixes" ?
                      <View style={{
                        width: 90,
                        height: 90,
                        borderRadius: 1000,
                        marginHorizontal: 8,

                        backgroundColor: Color.peixe,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }} >
                        <Image
                          source={peixes}
                          resizeMode="contain"
                        />
                      </View>
                      : sing === "Sagitário" ?
                        <View style={{
                          width: 90,
                          height: 90,
                          borderRadius: 1000,
                          marginHorizontal: 8,

                          backgroundColor: Color.sagitario,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }} >
                          <Image
                            source={sagitario}
                            resizeMode="contain"
                          />
                        </View>
                        : sing === "Virgem" ?
                          <View style={{
                            width: 90,
                            height: 90,
                            borderRadius: 1000,
                            marginHorizontal: 8,

                            backgroundColor: Color.virgem,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }} >
                            <Image
                              source={virgem}
                              resizeMode="contain"
                            />
                          </View>
                          : sing === "Touro" ?
                            <View style={{
                              width: 90,
                              height: 90,
                              borderRadius: 1000,
                              marginHorizontal: 8,

                              backgroundColor: Color.touro,
                              alignItems: 'center',
                              justifyContent: 'center',
                            }} >
                              <Image
                                source={touro}
                                resizeMode="contain"
                              />
                            </View>
                            : sing === "Aquário" ?
                              <View style={{
                                width: 90,
                                height: 90,
                                borderRadius: 1000,
                                marginHorizontal: 8,

                                backgroundColor: Color.aquario,
                                alignItems: 'center',
                                justifyContent: 'center',
                              }} >
                                <Image
                                  source={aquario}
                                  resizeMode="contain"
                                />
                              </View>
                              :
                              <Image
                                source={aquario}
                                resizeMode="contain"
                              />
      }



      <Text style={{ marginVertical: 5, }}>{nome}</Text>
    </RectButton>


  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

})