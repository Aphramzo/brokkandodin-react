import axios from 'axios';

const FlickerResponseToImages = response =>
  response.data.photos.photo.map(photo => ({
    date: photo.datetaken,
    description: photo.description['_content'], //eslint-disable-line
    largeWidth: photo.width_l,
    smallHeight: photo.height_n || 180,
    smallWidth: photo.width_n || 320,
    tags: photo.tags.split(' '),
    urlLarge: photo.url_l,
    urlOriginal: photo.url_o,
    urlSmall: photo.url_n || photo.url_m,
    video: photo.media === 'video',
    // videoUrl: `https://live.staticflickr.com/video/${photo.id}/${photo.secret}/1080p.mp4?s=${process.env.REACT_APP_FLICKR_API}`,
    // videoUrl: `https://www.flickr.com/photos/${process.env.REACT_APP_FLICKR_USER}/${photo.id}/play/site/${photo.secret}/`,
    videoUrl: `https://www.flickr.com/photos/${process.env.REACT_APP_FLICKR_USER}/${photo.id}/play/hd/${photo.secret}`,
  }));

// TODO: pull this endpoint apart further and actually use page number for scrolling
const flickrEndPoint = 'https://api.flickr.com/services/rest/?method=';
const flickrMethod = 'flickr.people.getPhotos';
const flickSearchMethod = 'flickr.photos.search';
const flickrApiKey = `&api_key=${process.env.REACT_APP_FLICKR_API}`;
const flickrParams =
  `&user_id=${process.env.REACT_APP_FLICKR_USER}&extras=date_taken,url_n,url_m,url_o,url_l,description,tags,media` +
  '&format=json&nojsoncallback=1&sort=date-taken-desc';

const GetRecent = async (pageNumber, resultsPerPage) => {
  const endpoint = `${flickrEndPoint}${flickrMethod}${flickrApiKey}${flickrParams}&per_page=${resultsPerPage || 25}&page=${pageNumber || 0}`;
  return FlickerResponseToImages(await axios.get(endpoint));
};

const Search = async (pageNumber, resultsPerPage, tags, searchString) => {
  const endpoint =
    `${flickrEndPoint}${flickSearchMethod}${flickrApiKey}${flickrParams}&` +
    `tags=${tags}&tag_mode=all&text=${searchString}&per_page=${resultsPerPage || 25}&page=${pageNumber || 0}`;
  return FlickerResponseToImages(await axios.get(endpoint));
};

const MonthsAgo = async (monthsAgo) => {
  const searchDateCalculator = () => {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() + monthsAgo, currentDate.getDate());
    return currentDate;
  };
  const endDate = (startDate) => {
    const returnDate = startDate;
    returnDate.setDate(returnDate.getDate() + 1);
    return returnDate;
  };
  const formatDateToFlickr = formatDate => formatDate.toISOString().substring(0, 10);

  const dateToSearch = searchDateCalculator();
  const endpoint =
    `${flickrEndPoint}${flickSearchMethod}${flickrApiKey}${flickrParams}&` +
    `min_taken_date=${formatDateToFlickr(dateToSearch)}&max_taken_date=${formatDateToFlickr(endDate(dateToSearch))}`;

  return FlickerResponseToImages(await axios.get(endpoint));
};

export { GetRecent, MonthsAgo, Search };
