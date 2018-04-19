import moment from 'moment';

const BuildFriendlyString = (number, measurement) => `${number} ${measurement}${number === 1 ? '' : 's'} old`;

const AgeDifferenceFriendly = (photoDate) => {
  const birthday = moment('11/07/2014');

  // is it more overhead to find all these values like this or grab the milliseconds and do our own calc?
  const days = photoDate.diff(birthday, 'days');
  if (days < 21) {
    return BuildFriendlyString(days, 'day');
  }

  const weeks = photoDate.diff(birthday, 'weeks');
  if (weeks < 13) {
    return BuildFriendlyString(weeks, 'week');
  }

  const months = photoDate.diff(birthday, 'months');
  if (months < 24) {
    return BuildFriendlyString(months, 'month');
  }

  const years = photoDate.diff(birthday, 'years');
  return BuildFriendlyString(years, 'year');
};

export default AgeDifferenceFriendly;
