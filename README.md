# :rainbow: react-native-month-switch

A React Native Month Switch Components

## Installation

```sh
yarn add react-native-month-switch

or

npm install react-native-month-switch
```

## Usage

```ts
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
```

## MonthSwitch Props

| Property          | Description                                                                             | Type                                              | Default | Version |
| ----------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------- | ------- | ------- |
| format            | To set the date format，can refer to：[Formatting](http://arshaw.com/xdate/#Formatting) | string                                            | -       |         |
| initValue         | To set init value, default current month， Format：yyyy-MM or yyyy-MM-dd or MM-yy ...   | string                                            | -       |         |
| onChange          | Callback function, can be executed when the month is changing                           | function(dataString: DateData)                    | -       |         |
| onLeftArrow       | Callback function, can be executed when the left arrow is click                         | function(date:string)                             | -       |         |
| onRightArrow      | Callback function, can be executed when the right arrow is click                        | function(date:string)                             | -       |         |
| renderCustomArrow | Custom arrow icon render method                                                         | function(direction: Direction) => React.ReactNode | -       |         |

## Contributing

While developing, you can run the [example app](https://github.com/Simoon-F/react-native-month-switch/example/README.md) to test your changes.

Make sure your code passes TypeScript and ESLint. Run the following to verify:

```
yarn typescript
yarn lint
```

To fix formatting errors, run the following:

```
yarn lint -- --fix
```

Remember to add tests for your change if possible.

## License

MIT
