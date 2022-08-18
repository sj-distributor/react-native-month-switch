export type Direction = 'left' | 'right';
import type { StyleProp, ViewStyle } from 'react-native';

export interface IMonthSwitchProps {
  ref?: React.Ref<any>;
  /** To set the date format，can refer to： http://arshaw.com/xdate/#Formatting */
  format?: string;
  /** To set init value, default current month， Format：yyyy-MM or yyyy-MM-dd or MM-yy ...  */
  initValue?: string;
  /** Max date that can be switch */
  maxDate?: string;
  /**  Style passed to the arrow */
  arrowStyle?: StyleProp<ViewStyle>;
  /** Callback function, can be executed when the month is changing    */
  onChange?: (date: DateData) => void;
  /** Callback function, can be executed when the left arrow is click    */
  onLeftArrow?: (date: string) => void;
  /** Callback function, can be executed when the right arrow is click    */
  onRightArrow?: (date: string) => void;
  /** Custom arrow icon render method  */
  renderCustomArrow?: (direction: Direction) => React.ReactNode;
}

export type DateData = {
  year: number;
  dateString: string;
  day: number | string;
  month: number | string;
};

export interface IMonthSwitchRef {
  reset: () => void;
}
