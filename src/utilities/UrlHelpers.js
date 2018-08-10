export default (searchCriteria) => {
  const queryString = Object.keys(searchCriteria).map(criteria => `${criteria}=${searchCriteria[criteria]}`).join('&');
  window.history.pushState(searchCriteria, 'Brokk and Odin', `?${queryString}`);
};

export const paramsToObject = (search) => {
  const hashes = search.slice(search.indexOf('?') + 1).split('&');
  return hashes.reduce((params, hash) => {
    const [key, val] = hash.split('=');
    if (key === undefined || key === '') {
      return params;
    }

    if (key === 'tags') {
      return Object.assign(params, { [key]: val ? val.split(',') : [] });
    }

    return Object.assign(params, { [key]: decodeURIComponent(val) });
  }, {});
};
