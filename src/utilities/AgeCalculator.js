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

const MemberWhenTitle = (monthsAgo) => {
  const photoDate = moment().add(monthsAgo, 'M');
  const months = photoDate.diff(moment(), 'months');
  const years = photoDate.diff(moment(), 'years');
  if (months === -1) {
    return 'A month ago this happened';
  }

  if (years === 0) {
    return 'Six months ago this happened';
  }

  const yearsString = `${years * -1} year${years < -1 ? 's' : ''}`;
  let monthsString = '';

  if (months%12 !== 0) {
    monthsString = ' and 6 months';
  }
  return `That ${yearsString}${monthsString} ago this happened`;
};

export {
  AgeFriendly,
  MemberWhenTitle,
  TimeAgoFriendly,
};
