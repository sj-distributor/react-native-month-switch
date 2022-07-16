export type Direction = 'left' | 'right';

export interface IMonthSwitchProps {
  /** 年月格式化格式. 格式化值设置可以参考: http://arshaw.com/xdate/#Formatting */
  format?: string;
  /** 初始化值, 格式：yyyy-MM or yyyy-MM-dd or MM-yy ... */
  initValue?: string;
  /** 日期变化回调 */
  onChange?: (date: DateData) => void;
  /** 点击左箭头回调 */
  onLeftArrow?: (date: string) => void;
  /** 点击箭头回调 */
  onRightArrow?: (date: string) => void;

  /** 是否自定义渲染左右两边的箭头图标 or 图片 */
  renderCustomArrow?: (direction: Direction) => React.ReactNode;
}

export type DateData = {
  year: number;
  dateString: string;
  day: number | string;
  month: number | string;
};
