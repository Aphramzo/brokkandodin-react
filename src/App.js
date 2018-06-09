import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import {
  HomePage,
  ConnectedRecentPhotos,
} from './components';
import './App.css';

const App = props => (
  <div className="App">
    <BrowserRouter>
      <HomePage>
        <Route
          component={ConnectedRecentPhotos}
          exact
          path="/"
        />
      </HomePage>
    </BrowserRouter>
  </div>
);

export default App;
