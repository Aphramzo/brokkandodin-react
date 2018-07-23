import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import {
  ConnectedRecentPhotos,
  MemberWhen,
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
          component={MemberWhen}
          exact
          path="/member-when"
        />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
