export default (searchCriteria) => {
  const queryString = Object.keys(searchCriteria).map(criteria => `${criteria}=${searchCriteria[criteria]}`).join('&');
  window.history.pushState(searchCriteria, 'Brokk and Odin', `?${queryString}`);
};
