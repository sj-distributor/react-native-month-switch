import XDate from 'xdate';
import {
  dateResource,
  dateToStringFormat,
  isSameMonth,
  makeUpZero,
  parseDate,
} from '../utils';

it('should test is same month', () => {
  const dateA = new XDate();
  const dateB = new XDate();

  expect(isSameMonth(dateA, dateB)).toBe(true);
});

it('should test if date type change string type format', () => {
  const date = new XDate('2022/08/08');

  expect(dateToStringFormat(date)).toBe('2022-08-08');
});

it('should test if give number make uo zero', () => {
  const n: number = 6;

  expect(makeUpZero(n)).toBe('06');
});

it('should test if parse date', () => {
  const date = new XDate('2022/6/6');

  expect(parseDate(date).getTime()).toBe(1654473600000);
});

it('should test if date resource', () => {
  const date = new XDate('2022/3/4');

  expect(dateResource(date)).toEqual({
    year: 2022,
    month: '03',
    day: '04',
    dateString: '2022-03-04',
  });
});
