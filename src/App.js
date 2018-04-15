import React from 'react';
import { ImageSet } from './components';
import './App.css';

const myTestImageArray = [
  'https://farm1.staticflickr.com/897/39373701710_a7815ca401_b.jpg',
  'https://farm1.staticflickr.com/889/27252629678_b705d742dc_b.jpg',
  'https://farm1.staticflickr.com/865/27252633798_cd01450f94_b.jpg',
  'https://farm1.staticflickr.com/897/40414533454_458df2f237_b.jpg',
  'https://farm1.staticflickr.com/818/40414528394_73b706d567_b.jpg',
];

const App = props => (
  <div className="App">
    <ImageSet images={myTestImageArray} />
  </div>
);

export default App;
