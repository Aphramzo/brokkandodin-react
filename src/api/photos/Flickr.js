import axios from 'axios';

const FlickerResponseToImages = response => (
  response.data.photos.photo.map(photo => (
    {
      date: photo.datetaken,
      description: photo.description,
      urlSmall: photo.url_n,
      urlLarge: photo.url_o,
    }
  ))
);

// TODO: pull this endpoint apart further and actually use page number for scrolling
const flickrEndPoint = `https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=${process.env.REACT_APP_FLICKR_API}&user_id=${process.env.REACT_APP_FLICKR_USER}&extras=date_taken,url_n,url_o,description&format=json&nojsoncallback=1`;
const GetRecent = async pageNumber => (
  FlickerResponseToImages(await axios.get(flickrEndPoint))
);

export default GetRecent;
