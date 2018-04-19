import moment from 'moment';

const BuildFriendlyString = (number, measurement, measurementName) => `${number} ${measurement}${number === 1 ? '' : 's'} ${measurementName}`;

const FriendlyDifference = (photoDate, toCompare, measurementName) => {
  // is it more overhead to find all these values like this or grab the milliseconds and do our own calc?
  const days = photoDate.diff(toCompare, 'days');
  if (days < 21) {
    return BuildFriendlyString(days, 'day', measurementName);
  }

  const weeks = photoDate.diff(toCompare, 'weeks');
  if (weeks < 13) {
    return BuildFriendlyString(weeks, 'week', measurementName);
  }

  const months = photoDate.diff(toCompare, 'months');
  if (months < 24) {
    return BuildFriendlyString(months, 'month', measurementName);
  }

  const years = photoDate.diff(toCompare, 'years');
  return BuildFriendlyString(years, 'year', measurementName);
};

const AgeFriendly = photoDate => FriendlyDifference(photoDate, moment('11/07/2014'), 'old');

const TimeAgoFriendly = photoDate => FriendlyDifference(moment(), photoDate, 'ago');

export {
  AgeFriendly,
  TimeAgoFriendly,
};
