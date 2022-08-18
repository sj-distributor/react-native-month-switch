import React, { useRef } from 'react';

import { Button, Image, View } from 'react-native';
import { MonthSwitch, DateData } from 'react-native-month-switch';
import type { IMonthSwitchRef } from 'src/types';

export default function App() {
  const monthSwitchRef = useRef<IMonthSwitchRef>(null);

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

      <Button
        title="On ref reset ⬇️"
        onPress={() => {
          monthSwitchRef?.current?.reset();
        }}
      />

      <MonthSwitch
        ref={monthSwitchRef}
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
