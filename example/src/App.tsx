import React from 'react';

import { Image, View } from 'react-native';
import { MonthSwitch, DateData } from 'react-native-month-switch';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-evenly',
      }}
    >
      <MonthSwitch />

      <MonthSwitch format={'MM-yyyy'} />

      <MonthSwitch
        format={'yyyy-MM'}
        onChange={(dataString: DateData) => {
          console.log(dataString);
        }}
      />

      <MonthSwitch
        format={'MM-yyyy'}
        renderCustomArrow={(direction: string) => {
          const arrowImage =
            direction === 'left'
              ? require('./images/left.png')
              : require('./images/right.png');

          return (
            <Image
              style={{
                width: 35,
                height: 35,
              }}
              source={arrowImage}
            />
          );
        }}
        onLeftArrow={(date: string) => {
          console.log('click', date);
        }}
        onRightArrow={(date: string) => {
          console.log('click', date);
        }}
      />
    </View>
  );
}
