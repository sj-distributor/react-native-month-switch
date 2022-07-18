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
        arrowStyle={{
          padding: 0,
        }}
        format={'yyyy-MM'}
        onChange={(dataString: DateData) => {
          /** {"dateString": "2022-05-18", "day": 18, "month": "05", "year": 2022} */
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
          /** click 2022-07-18 */
          console.log('click', date);
        }}
        onRightArrow={(date: string) => {
          /** click 2022-06-18 */
          console.log('click', date);
        }}
      />
    </View>
  );
}
