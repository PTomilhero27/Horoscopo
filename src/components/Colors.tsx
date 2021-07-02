import React from 'react';
import {
  View,
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





type SignosProps = {
  sing: string
}

export function Colors({ sing }: SignosProps) {
  return (
    <View style={styles.container} >


      {sing === "Áries" ?
        <View style={{
          backgroundColor: Color.aries,
          width: 400,
          height: 300,
          borderRadius: 1000,
          bottom: -60,
          opacity: 0.8,

          position: 'absolute',
        }} >
          <View style={{
            backgroundColor: Color.aries,
            width: 300,
            height: 200,
            borderRadius: 1000,
            bottom: -60,
            left: -80,
            opacity: 0.5,

            position: 'absolute',
          }} />
          <View style={{
            backgroundColor: Color.aries,
            width: 300,
            height: 200,
            borderRadius: 1000,
            left: 120,
            bottom: -40,
            opacity: 0.5,

            position: 'absolute',
          }} />
        </View>

        : sing === "Câncer" ?
        <View style={{
          backgroundColor: Color.cancer,
          width: 400,
          height: 300,
          borderRadius: 1000,
          bottom: -60,
          opacity: 0.4,

          position: 'absolute',
        }} >
          <View style={{
            backgroundColor: Color.cancer,
            width: 300,
            height: 200,
            borderRadius: 1000,
            bottom: -60,
            left: -80,
            opacity: 0.4,

            position: 'absolute',
          }} />
          <View style={{
            backgroundColor: Color.cancer,
            width: 300,
            height: 200,
            borderRadius: 1000,
            left: 120,
            bottom: -40,
            opacity: 0.5,

            position: 'absolute',
          }} />
        </View>

          : sing === 'Capricórnio' ?

          <View style={{
            backgroundColor: Color.capricornio,
            width: 400,
            height: 300,
            borderRadius: 1000,
            bottom: -60,
            opacity: 0.5,
  
            position: 'absolute',
          }} >
            <View style={{
              backgroundColor: Color.capricornio,
              width: 300,
              height: 200,
              borderRadius: 1000,
              bottom: -60,
              left: -80,
              opacity: 0.5,
  
              position: 'absolute',
            }} />
            <View style={{
              backgroundColor: Color.capricornio,
              width: 300,
              height: 200,
              borderRadius: 1000,
              left: 120,
              bottom: -40,
              opacity: 0.5,
  
              position: 'absolute',
            }} />
          </View>

            : sing === "Escorpião" ?
            <View style={{
              backgroundColor: Color.escorpiao,
              width: 400,
              height: 300,
              borderRadius: 1000,
              bottom: -60,
              opacity: 0.5,
    
              position: 'absolute',
            }} >
              <View style={{
                backgroundColor: Color.escorpiao,
                width: 300,
                height: 200,
                borderRadius: 1000,
                bottom: -60,
                left: -80,
                opacity: 0.5,
    
                position: 'absolute',
              }} />
              <View style={{
                backgroundColor: Color.escorpiao,
                width: 300,
                height: 200,
                borderRadius: 1000,
                left: 120,
                bottom: -40,
                opacity: 0.5,
    
                position: 'absolute',
              }} />
            </View>
              
              : sing === "Gêmeos" ?
              <View style={{
                backgroundColor: Color.gemeos,
                width: 400,
                height: 300,
                borderRadius: 1000,
                bottom: -60,
                opacity: 0.5,
      
                position: 'absolute',
              }} >
                <View style={{
                  backgroundColor: Color.gemeos,
                  width: 300,
                  height: 200,
                  borderRadius: 1000,
                  bottom: -60,
                  left: -80,
                  opacity: 0.5,
      
                  position: 'absolute',
                }} />
                <View style={{
                  backgroundColor: Color.gemeos,
                  width: 300,
                  height: 200,
                  borderRadius: 1000,
                  left: 120,
                  bottom: -40,
                  opacity: 0.5,
      
                  position: 'absolute',
                }} />
              </View>

                : sing === "Leão" ?
                <View style={{
                  backgroundColor: Color.leao,
                  width: 400,
                  height: 300,
                  borderRadius: 1000,
                  bottom: -60,
                  opacity: 0.5,
        
                  position: 'absolute',
                }} >
                  <View style={{
                    backgroundColor: Color.leao,
                    width: 300,
                    height: 200,
                    borderRadius: 1000,
                    bottom: -60,
                    left: -80,
                    opacity: 0.5,
        
                    position: 'absolute',
                  }} />
                  <View style={{
                    backgroundColor: Color.leao,
                    width: 300,
                    height: 200,
                    borderRadius: 1000,
                    left: 120,
                    bottom: -40,
                    opacity: 0.5,
        
                    position: 'absolute',
                  }} />
                </View>

                  : sing === "Libra" ?

                  <View style={{
                    backgroundColor: Color.libra,
                    width: 400,
                    height: 300,
                    borderRadius: 1000,
                    bottom: -60,
                    opacity: 0.5,
          
                    position: 'absolute',
                  }} >
                    <View style={{
                      backgroundColor: Color.libra,
                      width: 300,
                      height: 200,
                      borderRadius: 1000,
                      bottom: -60,
                      left: -80,
                      opacity: 0.5,
          
                      position: 'absolute',
                    }} />
                    <View style={{
                      backgroundColor: Color.libra,
                      width: 300,
                      height: 200,
                      borderRadius: 1000,
                      left: 120,
                      bottom: -40,
                      opacity: 0.5,
          
                      position: 'absolute',
                    }} />
                  </View>

                    : sing === "Peixes" ?
                    <View style={{
                      backgroundColor: Color.peixe,
                      width: 400,
                      height: 300,
                      borderRadius: 1000,
                      bottom: -60,
                      opacity: 0.5,
            
                      position: 'absolute',
                    }} >
                      <View style={{
                        backgroundColor: Color.peixe,
                        width: 300,
                        height: 200,
                        borderRadius: 1000,
                        bottom: -60,
                        left: -80,
                        opacity: 0.5,
            
                        position: 'absolute',
                      }} />
                      <View style={{
                        backgroundColor: Color.peixe,
                        width: 300,
                        height: 200,
                        borderRadius: 1000,
                        left: 120,
                        bottom: -40,
                        opacity: 0.5,
            
                        position: 'absolute',
                      }} />
                    </View>

                      : sing === "Sagitário" ?

                      <View style={{
                        backgroundColor: Color.sagitario,
                        width: 400,
                        height: 300,
                        borderRadius: 1000,
                        bottom: -60,
                        opacity: 0.5,
              
                        position: 'absolute',
                      }} >
                        <View style={{
                          backgroundColor: Color.sagitario,
                          width: 300,
                          height: 200,
                          borderRadius: 1000,
                          bottom: -60,
                          left: -80,
                          opacity: 0.5,
              
                          position: 'absolute',
                        }} />
                        <View style={{
                          backgroundColor: Color.sagitario,
                          width: 300,
                          height: 200,
                          borderRadius: 1000,
                          left: 120,
                          bottom: -40,
                          opacity: 0.5,
              
                          position: 'absolute',
                        }} />
                      </View>

                        : sing === "Virgem" ?
                     
                        <View style={{
                          backgroundColor: Color.virgem,
                          width: 400,
                          height: 300,
                          borderRadius: 1000,
                          bottom: -60,
                          opacity: 0.5,
                
                          position: 'absolute',
                        }} >
                          <View style={{
                            backgroundColor: Color.virgem,
                            width: 300,
                            height: 200,
                            borderRadius: 1000,
                            bottom: -60,
                            left: -80,
                            opacity: 0.5,
                
                            position: 'absolute',
                          }} />
                          <View style={{
                            backgroundColor: Color.virgem,
                            width: 300,
                            height: 200,
                            borderRadius: 1000,
                            left: 120,
                            bottom: -40,
                            opacity: 0.5,
                
                            position: 'absolute',
                          }} />
                        </View>
                         
                         : sing === "Touro" ?

                         <View style={{
                          backgroundColor: Color.touro,
                          width: 400,
                          height: 300,
                          borderRadius: 1000,
                          bottom: -60,
                          opacity: 0.5,
                
                          position: 'absolute',
                        }} >
                          <View style={{
                            backgroundColor: Color.touro,
                            width: 300,
                            height: 200,
                            borderRadius: 1000,
                            bottom: -60,
                            left: -80,
                            opacity: 0.5,
                
                            position: 'absolute',
                          }} />
                          <View style={{
                            backgroundColor: Color.touro,
                            width: 300,
                            height: 200,
                            borderRadius: 1000,
                            left: 120,
                            bottom: -40,
                            opacity: 0.5,
                
                            position: 'absolute',
                          }} />
                        </View>

                            : sing === "Aquário" ?

                            <View style={{
                              backgroundColor: Color.aquario,
                              width: 400,
                              height: 300,
                              borderRadius: 1000,
                              bottom: -60,
                              opacity: 0.5,
                    
                              position: 'absolute',
                            }} >
                              <View style={{
                                backgroundColor: Color.aquario,
                                width: 300,
                                height: 200,
                                borderRadius: 1000,
                                bottom: -60,
                                left: -80,
                                opacity: 0.5,
                    
                                position: 'absolute',
                              }} />
                              <View style={{
                                backgroundColor: Color.aquario,
                                width: 300,
                                height: 200,
                                borderRadius: 1000,
                                left: 120,
                                bottom: -40,
                                opacity: 0.5,
                    
                                position: 'absolute',
                              }} />
                            </View>

                              :
                              <Image
                                source={sagitario}
                                resizeMode="contain"
                              />
      }
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

})