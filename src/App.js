import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import {
  ConnectedMemberWhen,
  ConnectedRecentPhotos,
  Menu,
} from './components';
import './App.css';

const App = props => (
  <div className="App">
    <BrowserRouter>
      <div>
        <Menu />
        <Route
          component={ConnectedRecentPhotos}
          exact
          path="/"
        />
        <Route
          component={ConnectedMemberWhen}
          exact
          path="/member-when"
        />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
