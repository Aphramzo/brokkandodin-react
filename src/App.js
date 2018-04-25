import React from 'react';
import {
  HomePage,
  ConnectedRecentPhotos,
} from './components';
import './App.css';

const App = props => (
  <div className="App">
    <HomePage>
      <ConnectedRecentPhotos />
    </HomePage>

  </div>
);

export default App;
