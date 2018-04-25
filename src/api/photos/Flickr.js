import axios from 'axios';

const FlickerResponseToImages = response => (
  response.data.photos.photo.map(photo => (
    {
      date: photo.datetaken,
      description: photo.description['_content'], //eslint-disable-line
      smallHeight: photo.height_n,
      smallWidth: photo.width_n,
      tags: photo.tags.split(' '),
      urlLarge: photo.url_c,
      urlOriginal: photo.url_o,
      urlSmall: photo.url_n,
      video: photo.media === 'video',
      videoUrl: `https://www.flickr.com/photos/${process.env.REACT_APP_FLICKR_USER}/${photo.id}/play/site/${photo.secret}/`,
    }
  ))
);

// TODO: pull this endpoint apart further and actually use page number for scrolling
const flickrEndPoint = 'https://api.flickr.com/services/rest/?method=';
const flickrMethod = 'flickr.people.getPhotos';
const flickSearchMethod = 'flickr.photos.search';
const flickrApiKey = `&api_key=${process.env.REACT_APP_FLICKR_API}`;
const flickrParams = `&user_id=${process.env.REACT_APP_FLICKR_USER}&extras=date_taken,url_n,url_c,url_o,description,tags,media&format=json&nojsoncallback=1`;

const GetRecent = async (pageNumber, resultsPerPage, filter) => {
  // Faster to call this than search if nothing is filtered
  if (!filter) {
    const endpoint = `${flickrEndPoint}${flickrMethod}${flickrApiKey}${flickrParams}&per_page=${resultsPerPage || 25}&page=${pageNumber || 0}`;
    return FlickerResponseToImages(await axios.get(endpoint));
  }

  const endpoint = `${flickrEndPoint}${flickSearchMethod}${flickrApiKey}${flickrParams}&tags=${filter}&tag_mode=all&per_page=${resultsPerPage || 25}&page=${pageNumber || 0}`;
  return FlickerResponseToImages(await axios.get(endpoint));
};

export default GetRecent;
