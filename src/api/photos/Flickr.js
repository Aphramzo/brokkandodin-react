import axios from 'axios';

const FlickerResponseToImages = response => (
  response.data.photos.photo.map(photo => (
    {
      date: photo.datetaken,
      description: photo.description['_content'], //eslint-disable-line
      urlSmall: photo.url_n,
      urlLarge: photo.url_o,
    }
  ))
);

// TODO: pull this endpoint apart further and actually use page number for scrolling
const flickrEndPoint = 'https://api.flickr.com/services/rest/?method=';
const flickrMethod = 'flickr.people.getPhotos';
const flickrApiKey = `&api_key=${process.env.REACT_APP_FLICKR_API}`;
const flickrParams = `&user_id=${process.env.REACT_APP_FLICKR_USER}&extras=date_taken,url_n,url_o,description,tags&format=json&nojsoncallback=1`;
const GetRecent = async (pageNumber, resultsPerPage) => {
  const endpoint = `${flickrEndPoint}${flickrMethod}${flickrApiKey}${flickrParams}&per_page=${resultsPerPage || 25}&page=${pageNumber || 0}`;
  return FlickerResponseToImages(await axios.get(endpoint));
};

export default GetRecent;
