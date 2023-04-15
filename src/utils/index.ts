const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const getDateString = (date: Date): string =>
  `${
    monthNames[date.getMonth()]
  } ${date.getDay()}, ${date.toLocaleTimeString()}`;

export const getDateTimeString = (date: Date): string =>
  getDateString(date) + ' ' + date.toLocaleTimeString();
