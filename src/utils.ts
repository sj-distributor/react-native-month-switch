import type { DateData } from './types';
import XDate from 'xdate';

function isXDateType(date: any) {
  return date && date instanceof XDate;
}

export function isLeftMonthBig(dateA: XDate, dateB: XDate) {
  return dateA.diffMonths(dateB) > -1;
}

export function isSameMonth(dateA?: XDate, dateB?: XDate) {
  if (!isXDateType(dateA) || !isXDateType(dateB)) return false;

  return (
    dateA?.getFullYear() === dateB?.getFullYear() &&
    dateA?.getMonth() === dateB?.getMonth()
  );
}

export function dateToStringFormat(date: XDate) {
  if (!isNaN(date.getTime())) {
    const year = `${date.getFullYear()}`;
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const newMonth = makeUpZero(month);
    const newDay = makeUpZero(day);

    return year + '-' + newMonth + '-' + newDay;
  }
  return 'Invalid Date';
}

export function makeUpZero(n: number) {
  if (n < 10) return '0' + n;
  return n;
}

export function parseDate(date?: any) {
  if (date.timestamp) return new XDate(date.timestamp, true);

  if (date instanceof XDate) return new XDate(dateToStringFormat(date), true);

  if (date.getTime) {
    const dateString =
      date.getFullYear() +
      '-' +
      makeUpZero(date.getMonth() + 1) +
      '-' +
      makeUpZero(date.getDate());

    return new XDate(dateString, true);
  }

  if (date.year) {
    const dateString =
      date.year + '-' + makeUpZero(date.month) + '-' + makeUpZero(date.day);
    return new XDate(dateString, true);
  }

  return new XDate(date, true);
}

export function dateResource(d: XDate): DateData {
  const dateString = dateToStringFormat(d);
  return {
    year: d.getFullYear(),
    dateString: dateString,
    day: makeUpZero(d.getDate()),
    month: makeUpZero(d.getMonth() + 1),
  };
}
