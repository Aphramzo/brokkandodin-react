import React from 'react';
import { Helmet } from 'react-helmet';
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
    <Helmet>
      <title>
        {process.env.REACT_APP_TITLE}
      </title>
    </Helmet>
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
