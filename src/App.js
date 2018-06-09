import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import {
  HomePage,
  ConnectedRecentPhotos,
  Menu,
} from './components';
import './App.css';

const App = props => (
  <div className="App">
    <BrowserRouter>
      <div>
        <Menu />
        <HomePage>
          <Route
            component={ConnectedRecentPhotos}
            exact
            path="/"
          />
        </HomePage>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
