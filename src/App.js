import React from 'react';
import {
  HomePage,
  RecentPhotos,
} from './components';
import './App.css';

const App = props => (
  <div className="App">
    <HomePage>
      <RecentPhotos />
    </HomePage>

  </div>
);

export default App;
