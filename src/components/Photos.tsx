import React from 'react';
import {

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
  sing: string
}

export function Photos({ sing, ...rest }: SignosProps) {
  return (
    <RectButton style={styles.container} {...rest}>


      {sing === "Áries" ?
        <Image
          source={aries}
          resizeMode="contain"
        />
        : sing === "Câncer" ?

          <Image
            source={cancer}
            resizeMode="contain"
          />

          : sing === 'Capricórnio' ?

            <Image
              source={capricornio}
              resizeMode="contain"
            />

            : sing === "Escorpião" ?

              <Image
                source={escorpiao}
                resizeMode="contain"
              />

              : sing === "Gêmeos" ?

                <Image
                  source={gemeos}
                  resizeMode="contain"
                />

                : sing === "Leão" ?

                  <Image
                    source={leao}
                    resizeMode="contain"
                  />

                  : sing === "Libra" ?

                    <Image
                      source={libra}
                      resizeMode="contain"
                    />

                    : sing === "Peixes" ?

                      <Image
                        source={peixes}
                        resizeMode="contain"
                      />

                      : sing === "Sagitário" ?

                        <Image
                          source={sagitario}
                          resizeMode="contain"
                        />

                        : sing === "Virgem" ?
                          <Image
                            source={virgem}
                            resizeMode="contain"
                          />
                          : sing === "Touro" ?

                            <Image
                              source={touro}
                              resizeMode="contain"
                            />

                            : sing === "Aquário" ?

                              <Image
                                source={aquario}
                                resizeMode="contain"
                              />

                              :
                              <Image
                                source={sagitario}
                                resizeMode="contain"
                              />
      }
    </RectButton>


  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

})